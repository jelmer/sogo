
# GNUstep makefile

include ../config.make
include $(GNUSTEP_MAKEFILES)/common.make
include ../Version

BACKEND_VERSION = 1.0.0

UNRTF_VERSION = 0.21.2

### bootstrap library
MAPISTORESOGO = MAPIStoreSOGo
LIBRARY_NAME = $(MAPISTORESOGO)

$(MAPISTORESOGO)_VERSION = $(BACKEND_VERSION)

$(MAPISTORESOGO)_OBJC_FILES += \
	MAPIStoreSOGo.m

### backend bundle
SOGOBACKEND = SOGoBackend
BUNDLE_NAME = $(SOGOBACKEND)
BUNDLE_EXTENSION = .MAPIStore
BUNDLE_INSTALL_DIR = $(SOGO_LIBDIR)

UNRTF_DIR = unrtf-$(UNRTF_VERSION)

PYTHON = /usr/bin/python
PYTHON_IS_GOOD = $(shell $(PYTHON) -c 'from sys import version_info; a=version_info; print a[0] == 2 and a[1] >= 6')
ifeq (${PYTHON_IS_GOOD},False)
PYTHON = /usr/bin/python2.6
endif

all::
	@echo " Python executable: ${PYTHON}"

SAMBA_PRIVATE_DIR = $(shell $(PYTHON) ./samba-get-config.py "private dir")

$(SOGOBACKEND)_SUBPROJECTS += $(UNRTF_DIR)/src

$(SOGOBACKEND)_PRINCIPAL_CLASS = MAPIApplication

$(SOGOBACKEND)_OBJC_FILES += \
	MAPIApplication.m \
	MAPIStoreActiveTables.m \
	MAPIStoreAuthenticator.m \
	MAPIStoreMapping.m \
	MAPIStoreMIME.m \
	MAPIStoreTypes.m \
	MAPIStorePropertySelectors.m \
	MAPIStoreSamDBUtils.m \
	MAPIStoreUserContext.m \
	\
	SOGoMAPIObject.m \
	\
	SOGoMAPIDBObject.m \
	SOGoMAPIDBMessage.m \
	SOGoMAPIDBFolder.m \
	\
	MAPIStoreAppointmentWrapper.m \
	MAPIStoreAttachment.m \
	MAPIStoreAttachmentTable.m \
	MAPIStoreContext.m \
	MAPIStoreEmbeddedMessage.m \
	MAPIStoreFolder.m \
	MAPIStoreMessage.m \
	MAPIStoreObject.m \
	MAPIStoreObjectProxy.m \
	MAPIStoreSOGoObject.m \
	MAPIStoreTable.m \
	MAPIStoreMessageTable.m \
	MAPIStoreFolderTable.m \
	MAPIStorePermissionsTable.m \
	\
	MAPIStoreDBBaseContext.m \
	MAPIStoreDBFolder.m \
	MAPIStoreDBFolderTable.m \
	MAPIStoreDBMessage.m \
	MAPIStoreDBMessageTable.m \
	\
	MAPIStoreFAIMessage.m \
	MAPIStoreFAIMessageTable.m \
	\
	MAPIStoreGCSBaseContext.m \
	MAPIStoreGCSFolder.m \
	MAPIStoreGCSMessage.m \
	MAPIStoreGCSMessageTable.m \
	\
	MAPIStoreCalendarAttachment.m \
	MAPIStoreCalendarContext.m \
	MAPIStoreCalendarFolder.m \
	MAPIStoreCalendarMessage.m \
	MAPIStoreCalendarEmbeddedMessage.m \
	MAPIStoreCalendarMessageTable.m \
	MAPIStoreRecurrenceUtils.m \
	\
	MAPIStoreContactsAttachment.m \
	MAPIStoreContactsContext.m \
	MAPIStoreContactsFolder.m \
	MAPIStoreContactsMessage.m \
	MAPIStoreContactsMessageTable.m \
	\
	MAPIStoreTasksContext.m \
	MAPIStoreTasksFolder.m \
	MAPIStoreTasksMessage.m \
	MAPIStoreTasksMessageTable.m \
	\
	MAPIStoreMailAttachment.m \
	MAPIStoreMailContext.m \
	MAPIStoreMailFolder.m \
	MAPIStoreMailMessage.m \
	MAPIStoreMailVolatileMessage.m \
	MAPIStoreMailMessageTable.m \
	\
	MAPIStoreNotesContext.m \
	MAPIStoreNotesFolder.m \
	MAPIStoreNotesMessage.m \
	\
	MAPIStoreFallbackContext.m \
	\
	NSArray+MAPIStore.m \
	NSData+MAPIStore.m \
	NSDate+MAPIStore.m \
	NSObject+MAPIStore.m \
	NSString+MAPIStore.m \
	NSValue+MAPIStore.m \
	\
	iCalEvent+MAPIStore.m \
	iCalTimeZone+MAPIStore.m \
	\
	GCSSpecialQueries+OpenChange.m\
	\
	EOQualifier+MAPI.m \
	\
	EOBitmaskQualifier.m


$(SOGOBACKEND)_RESOURCE_FILES += \
	product.plist \
	$(UNRTF_DIR)/charmaps/SYMBOL.charmap \
	$(UNRTF_DIR)/outputs/html.conf

### unrtf
all:: $(UNRTF_DIR)/config.h $(UNRTF_DIR)/src/GNUmakefile

$(UNRTF_DIR): $(UNRTF_DIR).tar.gz $(UNRTF_DIR).diff
	@echo " Extracting and patching $(UNRTF_DIR)..."
	@rm -rf $(UNRTF_DIR)
	@$(TAR) -xvzf $< > /dev/null
	@(cd $(UNRTF_DIR) && patch -p1 < ../$(UNRTF_DIR).diff) > /dev/null
	@touch $(UNRTF_DIR)

$(UNRTF_DIR)-stamp: $(UNRTF_DIR)
	@touch $@

$(UNRTF_DIR)/config.h: $(UNRTF_DIR)-stamp unrtf_config_h
	@cp unrtf_config_h $(UNRTF_DIR)/config.h

$(UNRTF_DIR)/src/GNUmakefile: $(UNRTF_DIR)-stamp GNUmakefile.unrtf
	@cp GNUmakefile.unrtf $@

### pl reader
PLREADER_TOOL = plreader
$(PLREADER_TOOL)_OBJC_FILES += \
	plreader.m \

DBMSGREADER_TOOL = dbmsgreader
$(DBMSGREADER_TOOL)_OBJC_FILES += \
	dbmsgreader.m

$(DBMSGREADER_TOOL)_LIB_DIRS += \
	-L../SoObjects/SOGo/SOGo.framework/ -lSOGo \
	-L../OGoContentStore/obj/ -lOGoContentStore \
	-L../SOPE/GDLContentStore/obj/ -lGDLContentStore \
	-L../SOPE/NGCards/obj/ -lNGCards \
	-lNGObjWeb

TEST_TOOL_NAME += $(PLREADER_TOOL) $(DBMSGREADER_TOOL)

### cflags and libs
LIBMAPI_CFLAGS = $(shell pkg-config libmapi --cflags)

ifeq ($(LIBMAPI_CFLAGS),)
all install::
	@echo "Cannot build the OpenChange SOGo backend (empty CFLAGS for libmapistore)"
else

SAMBA_LIB_DIR = $(shell pkg-config libmapistore --variable=libdir)

LIBMAPI_LIBS = $(shell pkg-config libmapi --libs)

LIBMAPISTORE_CFLAGS = $(shell pkg-config libmapistore --cflags) -DSAMBA_PREFIX="\"$(shell pkg-config libmapistore --variable=prefix)\""
LIBMAPISTORE_LIBS = $(shell pkg-config libmapistore --libs) -lmapiproxy -lWEExtensions

$(MAPISTORESOGO)_INSTALL_DIR = $(DESTDIR)/$(SAMBA_LIB_DIR)/mapistore_backends
$(MAPISTORESOGO)_LIB_DIRS += \
        -L../SoObjects/SOGo/SOGo.framework/ -lSOGo \
	$(LIBMAPI_LIBS) \
	$(LIBMAPISTORE_LIBS)

$(SOGOBACKEND)_LIB_DIRS += \
        -L../OGoContentStore/$(GNUSTEP_OBJ_DIR)/ -lOGoContentStore \
        -L../SoObjects/SOGo/SOGo.framework/ -lSOGo \
	$(LIBMAPI_LIBS) \
	$(LIBMAPISTORE_LIBS)

ADDITIONAL_INCLUDE_DIRS += \
	-Werror -Wall \
	-DSAMBA_PRIVATE_DIR=@"\"$(SAMBA_PRIVATE_DIR)\"" \
	$(LIBMAPI_CFLAGS) \
	$(LIBMAPISTORE_CFLAGS) \
	-I$(UNRTF_DIR)/src \
	-I../SoObjects -I../SOPE \
	-DBACKEND_BUNDLE_NAME="@\"$(BUNDLE_NAME)$(BUNDLE_EXTENSION)\"" \
	-DSOGO_BUNDLES_DIR="@\"$(BUNDLE_INSTALL_DIR)\""

-include GNUmakefile.preamble
include $(GNUSTEP_MAKEFILES)/bundle.make
include $(GNUSTEP_MAKEFILES)/library.make
include $(GNUSTEP_MAKEFILES)/test-tool.make
include $(GNUSTEP_MAKEFILES)/aggregate.make
-include GNUmakefile.postamble

endif
