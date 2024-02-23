/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import { BalloonEditor as BalloonEditorBase } from '@ckeditor/ckeditor5-editor-balloon';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Font } from '@ckeditor/ckeditor5-font';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { ImageBlock, ImageInline, ImageResize } from '@ckeditor/ckeditor5-image';
import { Base64UploadAdapter } from '@ckeditor/ckeditor5-upload';
import { TableCaption, TableCellProperties, TableColumnResize, TableProperties } from '@ckeditor/ckeditor5-table';
import { BlockToolbar } from '@ckeditor/ckeditor5-ui';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { Strikethrough } from '@ckeditor/ckeditor5-basic-styles';

class ClassicEditor extends ClassicEditorBase {}
class BalloonEditor extends BalloonEditorBase {}

const PLUGINS = [
	BlockToolbar,
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResize,
	ImageBlock,
	ImageInline,
	Base64UploadAdapter,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Alignment,
	CloudServices,
	Font,
	SourceEditing,
	FindAndReplace,
	HorizontalLine,
	Strikethrough,
	TextTransformation
];

// Plugins to include in the build.
ClassicEditor.builtinPlugins = PLUGINS
BalloonEditor.builtinPlugins = PLUGINS

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'fontSize', 
			'fontFamily', 
			'fontColor', 
			'fontBackgroundColor',
			'|',
			'alignment',
			'indent',
			'outdent',
			'|',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo',
			'|',
			'sourceEditing',
		]
	},
	image: {
		toolbar: [
			'imageStyle:side',
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:alignRight',
			'imageStyle:alignBlockRight',
			'imageStyle:alignCenter',
			'imageStyle:alignLeft',
			'imageStyle:alignBlockLeft',
			'|',
			'imageTextAlternative',
			'toggleImageCaption',
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableCellProperties',
			'tableProperties'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

BalloonEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'bold',
			'italic',
			'link',
			'findAndReplace',
			'strikethrough',
			'underline',
			'-',
			'fontFamily',
			'fontBackgroundColor',
			'fontColor',
			'fontSize',
			'|',
			'alignment',
			'indent',
			'outdent'
		],
		shouldNotGroupWhenFull: true
	},
	language: 'en',
	blockToolbar: [
		'numberedList',
		'bulletedList',
		'|',
		'imageUpload',
		'mediaEmbed',
		'insertTable',
		'|',
		'blockQuote',
		'horizontalLine',
		'|',
		'undo',
		'redo',
	],
	image: {
		toolbar: [
			'imageTextAlternative',
			'toggleImageCaption',
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'imageStyle:alignLeft',
			'imageStyle:alignRight',
			'imageStyle:alignBlockLeft',
			'imageStyle:alignBlockRight',
			'imageStyle:alignCenter',
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableCellProperties',
			'tableProperties'
		]
	}
}

export default {
	ClassicEditor , BalloonEditor
}
