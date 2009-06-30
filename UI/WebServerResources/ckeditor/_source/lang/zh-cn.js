﻿/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Chinese Simplified language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Constains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['zh-cn'] =
{
	/**
	 * The language reading direction. Possible values are "rtl" for
	 * Right-To-Left languages (like Arabic) and "ltr" for Left-To-Right
	 * languages (like English).
	 * @default 'ltr'
	 */
	dir : 'ltr',

	/*
	 * Screenreader titles. Please note that screenreaders are not always capable
	 * of reading non-English words. So be careful while translating it.
	 */
	editorTitle		: 'Rich text editor, %1', // MISSING

	// Toolbar buttons without dialogs.
	source			: '源代码',
	newPage			: '新建',
	save			: '保存',
	preview			: '预览',
	cut				: '剪切',
	copy			: '复制',
	paste			: '粘贴',
	print			: '打印',
	underline		: '下划线',
	bold			: '加粗',
	italic			: '倾斜',
	selectAll		: '全选',
	removeFormat	: '清除格式',
	strike			: '删除线',
	subscript		: '下标',
	superscript		: '上标',
	horizontalrule	: '插入水平线',
	pagebreak		: '插入分页符',
	unlink			: '取消超链接',
	undo			: '撤消',
	redo			: '重做',

	// Common messages and labels.
	common :
	{
		browseServer	: '浏览服务器',
		url				: '源文件',
		protocol		: '协议',
		upload			: '上传',
		uploadSubmit	: '发送到服务器上',
		image			: '图象',
		flash			: 'Flash',
		form			: '表单',
		checkbox		: '复选框',
		radio		: '单选按钮',
		textField		: '单行文本',
		textarea		: '多行文本',
		hiddenField		: '隐藏域',
		button			: '按钮',
		select	: '列表/菜单',
		imageButton		: '图像域',
		notSet			: '<没有设置>',
		id				: 'ID',
		name			: '名称',
		langDir			: '语言方向',
		langDirLtr		: '从左到右 (LTR)',
		langDirRtl		: '从右到左 (RTL)',
		langCode		: '语言代码',
		longDescr		: '详细说明地址',
		cssClass		: '样式类名称',
		advisoryTitle	: '标题',
		cssStyle		: '行内样式',
		ok				: '确定',
		cancel			: '取消',
		generalTab		: '常规',
		advancedTab		: '高级',
		validateNumberFailed	: 'This value is not a number.', // MISSING
		confirmNewPage	: 'Any unsaved changes to this content will be lost. Are you sure you want to load new page?', // MISSING
		confirmCancel	: 'Some of the options have been changed. Are you sure to close the dialog?', // MISSING

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, unavailable</span>' // MISSING
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: '插入特殊符号',
		title		: '选择特殊符号'
	},

	// Link dialog.
	link :
	{
		toolbar		: '插入/编辑超链接',
		menu		: '编辑超链接',
		title		: '超链接',
		info		: '超链接信息',
		target		: '目标',
		upload		: '上传',
		advanced	: '高级',
		type		: '超链接类型',
		toAnchor	: '页内锚点链接',
		toEmail		: '电子邮件',
		target		: '目标',
		targetNotSet	: '<没有设置>',
		targetFrame	: '<框架>',
		targetPopup	: '<弹出窗口>',
		targetNew	: '新窗口 (_blank)',
		targetTop	: '整页 (_top)',
		targetSelf	: '本窗口 (_self)',
		targetParent	: '父窗口 (_parent)',
		targetFrameName	: '目标框架名称',
		targetPopupName	: '弹出窗口名称',
		popupFeatures	: '弹出窗口属性',
		popupResizable	: 'Resizable', // MISSING
		popupStatusBar	: '状态栏',
		popupLocationBar	: '地址栏',
		popupToolbar	: '工具栏',
		popupMenuBar	: '菜单栏',
		popupFullScreen	: '全屏 (IE)',
		popupScrollBars	: '滚动条',
		popupDependent	: '依附 (NS)',
		popupWidth		: '宽',
		popupLeft		: '左',
		popupHeight		: '高',
		popupTop		: '右',
		id				: 'Id', // MISSING
		langDir			: '语言方向',
		langDirNotSet	: '<没有设置>',
		langDirLTR		: '从左到右 (LTR)',
		langDirRTL		: '从右到左 (RTL)',
		acccessKey		: '访问键',
		name			: '名称',
		langCode		: '语言方向',
		tabIndex		: 'Tab 键次序',
		advisoryTitle	: '标题',
		advisoryContentType	: '内容类型',
		cssClasses		: '样式类名称',
		charset			: '字符编码',
		styles			: '行内样式',
		selectAnchor	: '选择一个锚点',
		anchorName		: '按锚点名称',
		anchorId		: '按锚点 ID',
		emailAddress	: '地址',
		emailSubject	: '主题',
		emailBody		: '内容',
		noAnchors		: '(此文档没有可用的锚点)',
		noUrl			: '请输入超链接地址',
		noEmail			: '请输入电子邮件地址'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '插入/编辑锚点链接',
		menu		: '锚点链接属性',
		title		: '锚点链接属性',
		name		: '锚点名称',
		errorName	: '请输入锚点名称'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: '查找和替换',
		find				: '查找',
		replace				: '替换',
		findWhat			: '查找:',
		replaceWith			: '替换:',
		notFoundMsg			: '指定文本没有找到。',
		matchCase			: '区分大小写',
		matchWord			: '全字匹配',
		matchCyclic			: 'Match cyclic', // MISSING
		replaceAll			: '全部替换',
		replaceSuccessMsg	: '%1 occurrence(s) replaced.' // MISSING
	},

	// Table Dialog
	table :
	{
		toolbar		: '表格',
		title		: '表格属性',
		menu		: '表格属性',
		deleteTable	: '删除表格',
		rows		: '行数',
		columns		: '列数',
		border		: '边框',
		align		: '对齐',
		alignNotSet	: '<没有设置>',
		alignLeft	: '左对齐',
		alignCenter	: '居中',
		alignRight	: '右对齐',
		width		: '宽度',
		widthPx		: '像素',
		widthPc		: '百分比',
		height		: '高度',
		cellSpace	: '间距',
		cellPad		: '边距',
		caption		: '标题',
		summary		: '摘要',
		headers		: '标题单元格',
		headersNone		: '无',
		headersColumn	: '第一列',
		headersRow		: '第一行',
		headersBoth		: '第一列和第一行',
		invalidRows		: 'Number of rows must be a number greater than 0.', // MISSING
		invalidCols		: 'Number of columns must be a number greater than 0.', // MISSING
		invalidBorder	: 'Border size must be a number.', // MISSING
		invalidWidth	: 'Table width must be a number.', // MISSING
		invalidHeight	: 'Table height must be a number.', // MISSING
		invalidCellSpacing	: 'Cell spacing must be a number.', // MISSING
		invalidCellPadding	: 'Cell padding must be a number.', // MISSING

		cell :
		{
			menu			: '单元格',
			insertBefore	: '在左侧插入单元格',
			insertAfter		: '在右侧插入单元格',
			deleteCell		: '删除单元格',
			merge			: '合并单元格',
			mergeRight		: '向右合并单元格',
			mergeDown		: '向下合并单元格',
			splitHorizontal	: '水平拆分单元格',
			splitVertical	: '垂直拆分单元格',
			title			: 'Cell Properties', // MISSING
			cellType		: 'Cell Type', // MISSING
			rowSpan			: 'Rows Span', // MISSING
			colSpan			: 'Columns Span', // MISSING
			wordWrap		: 'Word Wrap', // MISSING
			hAlign			: 'Horizontal Alignment', // MISSING
			vAlign			: 'Vertical Alignment', // MISSING
			alignTop		: 'Top', // MISSING
			alignMiddle		: 'Middle', // MISSING
			alignBottom		: 'Bottom', // MISSING
			alignBaseline	: 'Baseline', // MISSING
			bgColor			: 'Background Color', // MISSING
			borderColor		: 'Border Color', // MISSING
			data			: 'Data', // MISSING
			header			: 'Header', // MISSING
			yes				: 'Yes', // MISSING
			no				: 'No', // MISSING
			invalidWidth	: 'Cell width must be a number.', // MISSING
			invalidHeight	: 'Cell height must be a number.', // MISSING
			invalidRowSpan	: 'Rows span must be a whole number.', // MISSING
			invalidColSpan	: 'Columns span must be a whole number.' // MISSING
		},

		row :
		{
			menu			: '行',
			insertBefore	: '在上方插入行',
			insertAfter		: '在下方插入行',
			deleteRow		: '删除行'
		},

		column :
		{
			menu			: '列',
			insertBefore	: '在左侧插入列',
			insertAfter		: '在右侧插入列',
			deleteColumn	: '删除列'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '按钮属性',
		text		: '标签(值)',
		type		: '类型',
		typeBtn		: '按钮',
		typeSbm		: '提交',
		typeRst		: '重设'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '复选框属性',
		radioTitle	: '单选按钮属性',
		value		: '选定值',
		selected	: '已勾选'
	},

	// Form Dialog.
	form :
	{
		title		: '表单属性',
		menu		: '表单属性',
		action		: '动作',
		method		: '方法',
		encoding	: 'Encoding', // MISSING
		target		: '目标',
		targetNotSet	: '<没有设置>',
		targetNew	: '新窗口 (_blank)',
		targetTop	: '整页 (_top)',
		targetSelf	: '本窗口 (_self)',
		targetParent	: '父窗口 (_parent)'
	},

	// Select Field Dialog.
	select :
	{
		title		: '菜单/列表属性',
		selectInfo	: '信息',
		opAvail		: '列表值',
		value		: '值',
		size		: '高度',
		lines		: '行',
		chkMulti	: '允许多选',
		opText		: '标签',
		opValue		: '选定',
		btnAdd		: '新增',
		btnModify	: '修改',
		btnUp		: '上移',
		btnDown		: '下移',
		btnSetValue : '设为初始化时选定',
		btnDelete	: '删除'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '多行文本属性',
		cols		: '字符宽度',
		rows		: '行数'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '单行文本属性',
		name		: '名称',
		value		: '初始值',
		charWidth	: '字符宽度',
		maxChars	: '最多字符数',
		type		: '类型',
		typeText	: '文本',
		typePass	: '密码'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '隐藏域属性',
		name	: '名称',
		value	: '初始值'
	},

	// Image Dialog.
	image :
	{
		title		: '图象属性',
		titleButton	: '图像域属性',
		menu		: '图象属性',
		infoTab	: '图象',
		btnUpload	: '发送到服务器上',
		url		: '源文件',
		upload	: '上传',
		alt		: '替换文本',
		width		: '宽度',
		height	: '高度',
		lockRatio	: '锁定比例',
		resetSize	: '恢复尺寸',
		border	: '边框大小',
		hSpace	: '水平间距',
		vSpace	: '垂直间距',
		align		: '对齐方式',
		alignLeft	: '左对齐',
		alignAbsBottom: '绝对底边',
		alignAbsMiddle: '绝对居中',
		alignBaseline	: '基线',
		alignBottom	: '底边',
		alignMiddle	: '居中',
		alignRight	: '右对齐',
		alignTextTop	: '文本上方',
		alignTop	: '顶端',
		preview	: '预览',
		alertUrl	: '请输入图象地址',
		linkTab	: '链接',
		button2Img	: 'Do you want to transform the selected image button on a simple image?', // MISSING
		img2Button	: 'Do you want to transform the selected image on a image button?' // MISSING
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Flash 属性',
		propertiesTab	: 'Properties', // MISSING
		title		: 'Flash 属性',
		chkPlay		: '自动播放',
		chkLoop		: '循环',
		chkMenu		: '启用 Flash 菜单',
		chkFull		: 'Allow Fullscreen', // MISSING
 		scale		: '缩放',
		scaleAll		: '全部显示',
		scaleNoBorder	: '无边框',
		scaleFit		: '严格匹配',
		access			: 'Script Access', // MISSING
		accessAlways	: 'Always', // MISSING
		accessSameDomain	: 'Same domain', // MISSING
		accessNever	: 'Never', // MISSING
		align		: '对齐方式',
		alignLeft	: '左对齐',
		alignAbsBottom: '绝对底边',
		alignAbsMiddle: '绝对居中',
		alignBaseline	: '基线',
		alignBottom	: '底边',
		alignMiddle	: '居中',
		alignRight	: '右对齐',
		alignTextTop	: '文本上方',
		alignTop	: '顶端',
		quality		: 'Quality', // MISSING
		qualityBest		 : 'Best', // MISSING
		qualityHigh		 : 'High', // MISSING
		qualityAutoHigh	 : 'Auto High', // MISSING
		qualityMedium	 : 'Medium', // MISSING
		qualityAutoLow	 : 'Auto Low', // MISSING
		qualityLow		 : 'Low', // MISSING
		windowModeWindow	 : 'Window', // MISSING
		windowModeOpaque	 : 'Opaque', // MISSING
		windowModeTransparent	 : 'Transparent', // MISSING
		windowMode	: 'Window mode', // MISSING
		flashvars	: 'Variables for Flash', // MISSING
		bgcolor	: '背景颜色',
		width	: '宽度',
		height	: '高度',
		hSpace	: '水平间距',
		vSpace	: '垂直间距',
		validateSrc : '请输入超链接地址',
		validateWidth : 'Width must be a number.', // MISSING
		validateHeight : 'Height must be a number.', // MISSING
		validateHSpace : 'HSpace must be a number.', // MISSING
		validateVSpace : 'VSpace must be a number.' // MISSING
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '拼写检查',
		title			: 'Spell Check', // MISSING
		notAvailable	: 'Sorry, but service is unavailable now.', // MISSING
		errorLoading	: 'Error loading application service host: %s.', // MISSING
		notInDic		: '没有在字典里',
		changeTo		: '更改为',
		btnIgnore		: '忽略',
		btnIgnoreAll	: '全部忽略',
		btnReplace		: '替换',
		btnReplaceAll	: '全部替换',
		btnUndo			: '撤消',
		noSuggestions	: '- 没有建议 -',
		progress		: '正在进行拼写检查...',
		noMispell		: '拼写检查完成：没有发现拼写错误',
		noChanges		: '拼写检查完成：没有更改任何单词',
		oneChange		: '拼写检查完成：更改了一个单词',
		manyChanges		: '拼写检查完成：更改了 %1 个单词',
		ieSpellDownload	: '拼写检查插件还没安装，你是否想现在就下载？'
	},

	smiley :
	{
		toolbar	: '表情符',
		title	: '插入表情图标'
	},

	elementsPath :
	{
		eleTitle : '%1 element' // MISSING
	},

	numberedlist : '编号列表',
	bulletedlist : '项目列表',
	indent : '增加缩进量',
	outdent : '减少缩进量',

	justify :
	{
		left : '左对齐',
		center : '居中对齐',
		right : '右对齐',
		block : '两端对齐'
	},

	blockquote : '块引用',

	clipboard :
	{
		title		: '粘贴',
		cutError	: '您的浏览器安全设置不允许编辑器自动执行剪切操作，请使用键盘快捷键(Ctrl+X)来完成。',
		copyError	: '您的浏览器安全设置不允许编辑器自动执行复制操作，请使用键盘快捷键(Ctrl+C)来完成。',
		pasteMsg	: '请使用键盘快捷键(<STRONG>Ctrl+V</STRONG>)把内容粘贴到下面的方框里，再按 <STRONG>确定</STRONG>。',
		securityMsg	: '因为你的浏览器的安全设置原因，本编辑器不能直接访问你的剪贴板内容，你需要在本窗口重新粘贴一次。'
	},

	pastefromword :
	{
		toolbar : '从 MS Word 粘贴',
		title : '从 MS Word 粘贴',
		advice : '请使用键盘快捷键(<STRONG>Ctrl+V</STRONG>)把内容粘贴到下面的方框里，再按 <STRONG>确定</STRONG>。',
		ignoreFontFace : '忽略 Font 标签',
		removeStyle : '清理 CSS 样式'
	},

	pasteText :
	{
		button : '粘贴为无格式文本',
		title : '粘贴为无格式文本'
	},

	templates :
	{
		button : '模板',
		title : '内容模板',
		insertOption: '替换当前内容',
		selectPromptMsg: '请选择编辑器内容模板:',
		emptyListMsg : '(没有模板)'
	},

	showBlocks : '显示区块',

	stylesCombo :
	{
		label : '样式',
		voiceLabel : 'Styles', // MISSING
		panelVoiceLabel : 'Select a style', // MISSING
		panelTitle1 : 'Block Styles', // MISSING
		panelTitle2 : 'Inline Styles', // MISSING
		panelTitle3 : 'Object Styles' // MISSING
	},

	format :
	{
		label : '格式',
		voiceLabel : 'Format', // MISSING
		panelTitle : '格式',
		panelVoiceLabel : 'Select a paragraph format', // MISSING

		tag_p : '普通',
		tag_pre : '已编排格式',
		tag_address : '地址',
		tag_h1 : '标题 1',
		tag_h2 : '标题 2',
		tag_h3 : '标题 3',
		tag_h4 : '标题 4',
		tag_h5 : '标题 5',
		tag_h6 : '标题 6',
		tag_div : '段落(DIV)'
	},

	font :
	{
		label : '字体',
		voiceLabel : 'Font', // MISSING
		panelTitle : '字体',
		panelVoiceLabel : 'Select a font' // MISSING
	},

	fontSize :
	{
		label : '大小',
		voiceLabel : 'Font Size', // MISSING
		panelTitle : '大小',
		panelVoiceLabel : 'Select a font size' // MISSING
	},

	colorButton :
	{
		textColorTitle : '文本颜色',
		bgColorTitle : '背景颜色',
		auto : '自动',
		more : '其它颜色...'
	},

	colors :
	{
		'000' : 'Black',
		'800000' : 'Maroon',
		'8B4513' : 'Saddle Brown',
		'2F4F4F' : 'Dark Slate Gray',
		'008080' : 'Teal',
		'000080' : 'Navy',
		'4B0082' : 'Indigo',
		'696969' : 'Dim Gray',
		'B22222' : 'Fire Brick',
		'A52A2A' : 'Brown',
		'DAA520' : 'Golden Rod',
		'006400' : 'Dark Green',
		'40E0D0' : 'Turquoise',
		'0000CD' : 'Medium Blue',
		'800080' : 'Purple',
		'808080' : 'Gray',
		'F00' : 'Red',
		'FF8C00' : 'Dark Orange',
		'FFD700' : 'Gold',
		'008000' : 'Green',
		'0FF' : 'Cyan',
		'00F' : 'Blue',
		'EE82EE' : 'Violet',
		'A9A9A9' : 'Dark Gray',
		'FFA07A' : 'Light Salmon',
		'FFA500' : 'Orange',
		'FFFF00' : 'Yellow',
		'00FF00' : 'Lime',
		'AFEEEE' : 'Pale Turquoise',
		'ADD8E6' : 'Light Blue',
		'DDA0DD' : 'Plum',
		'D3D3D3' : 'Light Grey',
		'FFF0F5' : 'Lavender Blush',
		'FAEBD7' : 'Antique White',
		'FFFFE0' : 'Light Yellow',
		'F0FFF0' : 'Honeydew',
		'F0FFFF' : 'Azure',
		'F0F8FF' : 'Alice Blue',
		'E6E6FA' : 'Lavender',
		'FFF' : 'White'
	},

	scayt :
	{
		title : 'Spell Check As You Type', // MISSING
		enable : 'Enable SCAYT', // MISSING
		disable : 'Disable SCAYT', // MISSING
		about : 'About SCAYT', // MISSING
		toggle : 'Toggle SCAYT', // MISSING
		options : 'Options', // MISSING
		langs : 'Languages', // MISSING
		moreSuggestions : 'More suggestions', // MISSING
		ignore : 'Ignore', // MISSING
		ignoreAll : 'Ignore All', // MISSING
		addWord : 'Add Word', // MISSING
		emptyDic : 'Dictionary name should not be empty.', // MISSING
		optionsTab : 'Options', // MISSING
		languagesTab : 'Languages', // MISSING
		dictionariesTab : 'Dictionaries', // MISSING
		aboutTab : 'About' // MISSING
	},

	about :
	{
		title : 'About CKEditor', // MISSING
		moreInfo : 'For licensing information please visit our web site:', // MISSING
		copy : 'Copyright &copy; $1. All rights reserved.' // MISSING
	},

	maximize : 'Maximize', // MISSING

	fakeobjects :
	{
		anchor : 'Anchor', // MISSING
		flash : 'Flash Animation', // MISSING
		div : 'Page Break', // MISSING
		unknown : 'Unknown Object' // MISSING
	},

	resize : 'Drag to resize' // MISSING
};