/*
* bootstrap-table - v1.11.0 - 2016-07-02
* https://github.com/wenzhixin/bootstrap-table
* Copyright (c) 2016 zhixin wen
* Licensed MIT License
*/
!function(a){"use strict";var b=a.fn.bootstrapTable.utils.sprintf,c=a.fn.bootstrapTable.utils.objectKeys,d=function(b,c,d){c=a.trim(c),b=a(b.get(b.length-1)),f(b,c)||b.append(a("<option></option>").attr("value",c).text(a("<div />").html(d).text()))},e=function(b){var c=b.find("option:gt(0)");c.sort(function(b,c){return b=a(b).text().toLowerCase(),c=a(c).text().toLowerCase(),a.isNumeric(b)&&a.isNumeric(c)&&(b=parseFloat(b),c=parseFloat(c)),b>c?1:c>b?-1:0}),b.find("option:gt(0)").remove(),b.append(c)},f=function(a,b){for(var c=a.get(a.length-1).options,d=0;d<c.length;d++)if(c[d].value===b.toString())return!0;return!1},g=function(a){a.$tableHeader.css("height","77px")},h=function(a){var b=a.$header;return a.options.height&&(b=a.$tableHeader),b},i=function(a){var b="select, input";return a.options.height&&(b="table select, table input"),b},j=function(b){if(a.fn.bootstrapTable.utils.isIEBrowser()){if(a(b).is("input")){var c=0;if("selectionStart"in b)c=b.selectionStart;else if("selection"in document){b.focus();var d=document.selection.createRange(),e=document.selection.createRange().text.length;d.moveStart("character",-b.value.length),c=d.text.length-e}return c}return-1}return-1},k=function(b,c){a.fn.bootstrapTable.utils.isIEBrowser()&&(void 0!==b.setSelectionRange?b.setSelectionRange(c,c):a(b).val(b.value))},l=function(b){var c=h(b),d=i(b);b.options.valuesFilterControl=[],c.find(d).each(function(){b.options.valuesFilterControl.push({field:a(this).closest("[data-field]").data("field"),value:a(this).val(),position:j(a(this).get(0))})})},m=function(b){var c=null,d=[],e=h(b),f=i(b);b.options.valuesFilterControl.length>0&&e.find(f).each(function(){c=a(this).closest("[data-field]").data("field"),d=a.grep(b.options.valuesFilterControl,function(a){return a.field===c}),d.length>0&&(a(this).val(d[0].value),k(a(this).get(0),d[0].position))})},n=function(){var b=[],c=document.cookie.match(/(?:bs.table.)(\w*)/g);return c?(a.each(c,function(c,d){/./.test(d)&&(d=d.split(".").pop()),-1===a.inArray(d,b)&&b.push(d)}),b):void 0},o=function(b){var c=b.options.data,f=(b.pageTo<b.options.data.length?b.options.data.length:b.pageTo,function(a){return a.filterControl&&"select"===a.filterControl.toLowerCase()&&a.searchable}),g=function(a){return void 0===a.filterData||"column"===a.filterData.toLowerCase()},h=function(a){return a&&a.length>0},i=b.options.pagination?"server"===b.options.sidePagination?b.pageTo:b.options.totalRows:b.pageTo;a.each(b.header.fields,function(j,k){var l=b.columns[a.fn.bootstrapTable.utils.getFieldIndex(b.columns,k)],m=a(".bootstrap-table-filter-control-"+p(l.field));if(f(l)&&g(l)&&h(m)){0===m.get(m.length-1).options.length&&d(m,"","");for(var n={},o=0;i>o;o++){var q=c[o][k],r=a.fn.bootstrapTable.utils.calculateObjectValue(b.header,b.header.formatters[j],[q,c[o],o],q);n[r]=q}for(var s in n)d(m,n[s],s);e(m)}})},p=function(a){return String(a).replace(/(:|\.|\[|\]|,)/g,"\\$1")},q=function(b,c){var f,g,h=!1,i=0;a.each(b.columns,function(i,j){if(f="hidden",g=[],j.visible){if(j.filterControl){g.push('<div style="margin: 0 2px 2px 2px;" class="filterControl">');var k=j.filterControl.toLowerCase();j.searchable&&b.options.filterTemplate[k]&&(h=!0,f="visible",g.push(b.options.filterTemplate[k](b,j.field,f)))}else g.push('<div style="height: 34px;"></div>');if(a.each(c.children().children(),function(b,c){return c=a(c),c.data("field")===j.field?(c.find(".fht-cell").append(g.join("")),!1):void 0}),void 0!==j.filterData&&"column"!==j.filterData.toLowerCase()){var l,m,n=t(s,j.filterData.substring(0,j.filterData.indexOf(":")));if(null===n)throw new SyntaxError('Error. You should use any of these allowed filter data methods: var, json, url. Use like this: var: {key: "value"}');l=j.filterData.substring(j.filterData.indexOf(":")+1,j.filterData.length),m=a(".bootstrap-table-filter-control-"+p(j.field)),d(m,"",""),n(l,m);var o,q;switch(n){case"url":a.ajax({url:l,dataType:"json",success:function(a){for(var b in a)d(m,b,a[b]);e(m)}});break;case"var":o=window[l];for(q in o)d(m,q,o[q]);e(m);break;case"jso":o=JSON.parse(l);for(q in o)d(m,q,o[q]);e(m)}}}}),h?(c.off("keyup","input").on("keyup","input",function(a){clearTimeout(i),i=setTimeout(function(){b.onColumnSearch(a)},b.options.searchTimeOut)}),c.off("change","select").on("change","select",function(a){clearTimeout(i),i=setTimeout(function(){b.onColumnSearch(a)},b.options.searchTimeOut)}),c.off("mouseup","input").on("mouseup","input",function(c){var d=a(this),e=d.val();""!==e&&setTimeout(function(){var a=d.val();""===a&&(clearTimeout(i),i=setTimeout(function(){b.onColumnSearch(c)},b.options.searchTimeOut))},1)}),c.find(".date-filter-control").length>0&&a.each(b.columns,function(b,d){void 0!==d.filterControl&&"datepicker"===d.filterControl.toLowerCase()&&c.find(".date-filter-control.bootstrap-table-filter-control-"+d.field).datepicker(d.filterDatepickerOptions).on("changeDate",function(b){a(b.currentTarget).keyup()})})):c.find(".filterControl").hide()},r=function(a){switch(a=void 0===a?"left":a.toLowerCase()){case"left":return"ltr";case"right":return"rtl";case"auto":return"auto";default:return"ltr"}},s={"var":function(a,b){var c=window[a];for(var f in c)d(b,f,c[f]);e(b)},url:function(b,c){a.ajax({url:b,dataType:"json",success:function(a){for(var b in a)d(c,b,a[b]);e(c)}})},json:function(a,b){var c=JSON.parse(a);for(var f in c)d(b,f,c[f]);e(b)}},t=function(a,b){for(var c=Object.keys(a),d=0;d<c.length;d++)if(c[d]===b)return a[b];return null};a.extend(a.fn.bootstrapTable.defaults,{filterControl:!1,onColumnSearch:function(){return!1},filterShowClear:!1,alignmentSelectControlOptions:void 0,filterTemplate:{input:function(a,c,d){return b('<input type="text" class="form-control bootstrap-table-filter-control-%s" style="width: 100%; visibility: %s">',c,d)},select:function(a,c,d){return b('<select class="form-control bootstrap-table-filter-control-%s" style="width: 100%; visibility: %s" dir="%s"></select>',c,d,r(a.options.alignmentSelectControlOptions))},datepicker:function(a,c,d){return b('<input type="text" class="form-control date-filter-control bootstrap-table-filter-control-%s" style="width: 100%; visibility: %s">',c,d)}},valuesFilterControl:[]}),a.extend(a.fn.bootstrapTable.COLUMN_DEFAULTS,{filterControl:void 0,filterData:void 0,filterDatepickerOptions:void 0,filterStrictSearch:!1,filterStartsWithSearch:!1}),a.extend(a.fn.bootstrapTable.Constructor.EVENTS,{"column-search.bs.table":"onColumnSearch"}),a.extend(a.fn.bootstrapTable.defaults.icons,{clear:"glyphicon-trash icon-clear"}),a.extend(a.fn.bootstrapTable.locales,{formatClearFilters:function(){return"Clear Filters"}}),a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales);var u=a.fn.bootstrapTable.Constructor,v=u.prototype.init,w=u.prototype.initToolbar,x=u.prototype.initHeader,y=u.prototype.initBody,z=u.prototype.initSearch;u.prototype.init=function(){if(this.options.filterControl){var a=this;Object.keys||c(),this.options.valuesFilterControl=[],this.$el.on("reset-view.bs.table",function(){a.options.height&&(a.$tableHeader.find("select").length>0||a.$tableHeader.find("input").length>0||q(a,a.$tableHeader))}).on("post-header.bs.table",function(){m(a)}).on("post-body.bs.table",function(){a.options.height&&g(a)}).on("column-switch.bs.table",function(){m(a)})}v.apply(this,Array.prototype.slice.apply(arguments))},u.prototype.initToolbar=function(){if(this.showToolbar=this.options.filterControl&&this.options.filterShowClear,w.apply(this,Array.prototype.slice.apply(arguments)),this.options.filterControl&&this.options.filterShowClear){var c=this.$toolbar.find(">.btn-group"),d=c.find(".filter-show-clear");d.length||(d=a(['<button class="btn btn-default filter-show-clear" ',b('type="button" title="%s">',this.options.formatClearFilters()),b('<i class="%s %s"></i> ',this.options.iconsPrefix,this.options.icons.clear),"</button>"].join("")).appendTo(c),d.off("click").on("click",a.proxy(this.clearFilterControl,this)))}},u.prototype.initHeader=function(){x.apply(this,Array.prototype.slice.apply(arguments)),this.options.filterControl&&q(this,this.$header)},u.prototype.initBody=function(){y.apply(this,Array.prototype.slice.apply(arguments)),o(this)},u.prototype.initSearch=function(){if(z.apply(this,Array.prototype.slice.apply(arguments)),"server"!==this.options.sidePagination){var b=this,c=a.isEmptyObject(this.filterColumnsPartial)?null:this.filterColumnsPartial;this.data=c?a.grep(this.data,function(d,e){for(var f in c){var g=b.columns[a.fn.bootstrapTable.utils.getFieldIndex(b.columns,f)],h=c[f].toLowerCase(),i=d[f];if(g&&g.searchFormatter&&(i=a.fn.bootstrapTable.utils.calculateObjectValue(b.header,b.header.formatters[a.inArray(f,b.header.fields)],[i,d,e],i)),g.filterStrictSearch){if(-1===a.inArray(f,b.header.fields)||"string"!=typeof i&&"number"!=typeof i||i.toString().toLowerCase()!==h.toString().toLowerCase())return!1}else if(g.filterStartsWithSearch){if(-1===a.inArray(f,b.header.fields)||"string"!=typeof i&&"number"!=typeof i||0!==(i+"").toLowerCase().indexOf(h))return!1}else if(-1===a.inArray(f,b.header.fields)||"string"!=typeof i&&"number"!=typeof i||-1===(i+"").toLowerCase().indexOf(h))return!1}return!0}):this.data}},u.prototype.initColumnSearch=function(a){if(l(this),a){this.filterColumnsPartial=a,this.updatePagination();for(var b in a)this.trigger("column-search",b,a[b])}},u.prototype.onColumnSearch=function(b){if(!(a.inArray(b.keyCode,[37,38,39,40])>-1)){l(this);var c=a.trim(a(b.currentTarget).val()),d=a(b.currentTarget).closest("[data-field]").data("field");a.isEmptyObject(this.filterColumnsPartial)&&(this.filterColumnsPartial={}),c?this.filterColumnsPartial[d]=c:delete this.filterColumnsPartial[d],this.searchText+="randomText",this.options.pageNumber=1,this.onSearch(b),this.trigger("column-search",d,c)}},u.prototype.clearFilterControl=function(){if(this.options.filterControl&&this.options.filterShowClear){var c=this,d=n(),e=h(c),f=e.closest("table"),g=e.find(i(c)),j=c.$toolbar.find(".search input"),k=0;if(a.each(c.options.valuesFilterControl,function(a,b){b.value=""}),m(c),!(g.length>0))return;if(this.filterColumnsPartial={},a(g[0]).trigger("INPUT"===g[0].tagName?"keyup":"change"),j.length>0&&c.resetSearch(),c.options.sortName!==f.data("sortName")||c.options.sortOrder!==f.data("sortOrder")){var l=e.find(b('[data-field="%s"]',a(g[0]).closest("table").data("sortName")));l.length>0&&(c.onSort(f.data("sortName"),f.data("sortName")),a(l).find(".sortable").trigger("click"))}clearTimeout(k),k=setTimeout(function(){d&&d.length>0&&a.each(d,function(a,b){void 0!==c.deleteCookie&&c.deleteCookie(b)})},c.options.searchTimeOut)}}}(jQuery);