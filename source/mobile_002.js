
var methodGroup={
	addStep:function(){
		var form_milestone_step_group=$("#form_milestone_holder").find(".form_milestone_step");
		if(form_milestone_step_group.size()>0){
			$(".process_tu_left").empty();
			$(".process_tu_right").empty();
			for(var i=0;i<form_milestone_step_group.size();i++){
				var tuLi=$('<li class="process_circle"><span></span></li>');
				var textLi=$('<li>'+$(form_milestone_step_group[i]).text()+'</li>');
				if($(form_milestone_step_group[i]).hasClass("green")){
					tuLi.find("span").addClass("active");
					textLi.addClass("process_finished");
				}
				if($(form_milestone_step_group[i]).hasClass("blue")){
					tuLi.find("span").addClass("active");
					textLi.addClass("process_current");
				}
				$(".process_tu_left").append(tuLi);
				$(".process_tu_right").append(textLi);
				if(!$(form_milestone_step_group[i]).hasClass("last")){
					var xianLi=$('<li class="process_xian"><span></span></li>');
					if($(form_milestone_step_group[i]).hasClass("green")){
						xianLi.find("span").addClass("active");
					}
					$(".process_tu_left").append(xianLi);
				}
			}
			//计算百分比
			var xianSize=$(".process_xian").size();
			var xianActiveSize=$(".process_xian.active").size();
			var process=parseInt(xianActiveSize/xianSize);
			$(".processCount").html("已完成："+process+"%")  
		}
	},
	getMenuGroup:function(){
		var menuGroup=$("#nav_menu").find(".nav_menu_group");
		if(menuGroup.size()>0){
			for(var i=0;i<menuGroup.size();i++){
				var menuLis=menuGroup.eq(i).find("li");
				for(var j=0;j<menuLis.size();j++){
					if((!menuLis.eq(j).hasClass("nav_menu_line"))&&(menuLis.eq(j).find(".menu_icon_bookmark").size()==0)){
						$(".menuGroupUl").append(menuLis.eq(j));
					}
				}
			}
		}
		//恢复提示修改成提示
		$("#nav_menu_recover").find(".menu_text").html("提示");
	},
	tableFirstTr:function(){
		var tableArr=$(".xdTableContentRow").find("table");
		var tableGroup=[];
		for(var i=0;i<tableArr.size();i++){
			if(tableArr.eq(i).find(".mdx_heading").size()>0){
				tableGroup.push(tableArr.eq(i));
			}
		}
		var firstTrArr=[];
		for(var i=0;i<tableGroup.length;i++){
			if($(tableGroup[i]).parents("tr").eq(0).hasClass("xdTableContentRow")){
				var firstTr=$(tableGroup[i]).find("tr").eq(0);
				if(firstTr.find(".mdx_heading").size()>0){
					firstTrArr.push(firstTr);
				}
			}
		}
		this.addLeftGreen(firstTrArr);
	},
	addLeftGreen:function(firstTrArr){
		for(var i=0;i<firstTrArr.length;i++){
			$(firstTrArr[i]).addClass("leftGreen");
		}
	},
	getBs:function(){
		//获取有子元素mdx_heading的table
		var tableArr=$("tr.xdTableContentRow").find("table");
		var znTableGroup=[];
		for(var i=0;i<tableArr.length;i++){
			if(tableArr.eq(i).find(".mdx_heading").size()>0){
				znTableGroup.push(tableArr.eq(i));
			}
		}
		this.showGuide(znTableGroup);
	},
	showGuide:function(tableArr){
		if(tableArr&&tableArr.length>0){
			for(var i=0;i<tableArr.length;i++){
				var bsZnEle=$("<div class='bsZnEle'><div class='bs_title'></div><ul class='bs_ul'></ul></div>");
				$(tableArr[i]).addClass("tableHidden").after(bsZnEle);
				var t1Count=0;
				var trs=$(tableArr[i]).find("tr");
				console.log(trs);
				for(var j=0;j<trs.size();j++){
					var trsTest=trs.eq(j).find("td").eq(0).html();
					var mdx_heading=$(trs).eq(j).find(".mdx_heading");
					//一级标题
					if(mdx_heading.size()>0){
						if(mdx_heading.hasClass("mdx_bold")){
							$(bsZnEle).find(".bs_title").addClass("zyT1").html(trsTest);
						}else if(mdx_heading.hasClass("mdx_italic")){
							$(bsZnEle).find(".bs_title").addClass("clT1").html(trsTest);
						}else{
							$(bsZnEle).find(".bs_title").addClass("bsT1").html(trsTest);
						}
					}

					//判断是否有二级标题标识
					var mdx_ul_item=$(trs).eq(j).find(".mdx_ul_item");
					if(mdx_ul_item.size()>0){
						if(mdx_ul_item.find(".mdx_emoji_check").size()>0){
							var newLi=$("<li class='bs_t1 cl_t1'>"+trsTest+"</li>");
							$(bsZnEle).find(".bs_ul").append(newLi);
						}else if(mdx_ul_item.find(".mdx_emoji_none").size()>0){
							var newLi=$("<li class='bs_t1 zy_t1'>"+trsTest+"</li>");
							$(bsZnEle).find(".bs_ul").append(newLi);
						}else{
							if(!($(bsZnEle).find(".bs_ul").hasClass("bs_title_ul"))){
								$(bsZnEle).find(".bs_ul").addClass("bs_title_ul");
							}
							t1Count++;
							var newLi=$("<li class='bs_t1'><span class='bs_t1_span'>"+t1Count+"</span>"+trsTest+"</li>");
							$(bsZnEle).find(".bs_ul").append(newLi);
						}
					}
					//判断是否有三级标题标识
					var mdx_ol_item=$(trs).eq(j).find(".mdx_ol_item");
					if(mdx_ol_item.size()>0){
						if(mdx_ol_item.hasClass("mdx_indent_2")){
							var newLi=$("<li class='bs_t2'><span class='bs_t2_span'></span>"+trsTest+"</li>");
							$(bsZnEle).find(".bs_ul").append(newLi);
						}
					}
				}
			}
		}
	},
	commandBarBottom:function(){
		var btnList=$("#form_command_bar").find(".command_button");
		var btnContainer=$("<div class='btnContainer'></div>");
		$("body").append(btnContainer);
		var tools_group=$("<ul class='toolGroup'><li class='tool_save_li hide'><div class='tool_icon_save'></div><p>保存草稿</p></li><li class='tool_guide_li hide'><div class='tool_icon_guide'></div><p>办事指南</p></li></ul>");
		$(".btnContainer").append(tools_group);
		if($$.params.saveable===true){
			$(".tool_save_li").removeClass("hide");
		}
		if($$.params.instructionUrl!=null){
			$(".tool_guide_li").removeClass("hide");
		}
		var buttons_group=$("<ul class='buttonGroup'></ul>");
		$(".btnContainer").append(buttons_group);
		$(".tool_save_li").not(".hide").click(function(){
			//触发保存
			$$.save();
		})
		$(".tool_guide_li").not(".hide").click(function(){
			//触发办事指南
			$$.instruct();
		})
		this.btnShow(btnList);
	},
	btnShow:function(btnList){
		if(btnList.size()>0){
			var forLen=btnList.size();
			if(btnList.size()>3){
				forLen=3;
			}
			var btnClass="oneButton";
			if(forLen==2){
				btnClass="twoButton";
			}
			if(forLen==3){
				btnClass="threeButton";
			}
			for(var i=0;i<forLen;i++){
				btnList.eq(i).find(".toolbar_button_tip").remove();
				if(i<2){
					var btnItem=btnList.eq(i);
					var buttonContent=btnItem.find(".command_button_content").text();
					var newButton=$("<li class='"+btnClass+"'>"+buttonContent+"</li>");
					$(".buttonGroup").append(newButton);
					(function(i){
		                newButton.click(function(){
		                	 btnList.eq(i).click();
		                })
		            })(i);
				}else{
					var buttonContent="更多操作";
					var newButton=$("<li class='getMore "+btnClass+"'>"+buttonContent+"<div class='moreBtnShow'></div></li>");
					$(".buttonGroup").append(newButton);
					for(var j=2;j<btnList.size();j++){
						var btnItem2=btnList.eq(j);
						var buttonContent2=btnItem2.find(".command_button_content").text();
						var newSpan=$("<span>"+buttonContent2+"</span>");
						$(".moreBtnShow").append(newSpan);
						(function(j){
			                newSpan.click(function(){
			                	btnList.eq(j).click();
			                })
			            })(j);
					}
					newButton.click(function(){
						$(".moreBtnShow").toggleClass("show");
					})
				}
				
			}
		}
	},
	getRepeatTable:function(){
		var repeatTable=$(".xdRepeatingTable");
		for(var i=0;i<repeatTable.size();i++){
			var repeatTableContainer=$("<div class='repeatTableContainer'></div>");
			$(repeatTable[i]).after(repeatTableContainer);
			$(".repeatTableContainer").append($(repeatTable[i]));
			var tds=$(repeatTable[i]).find(".infoplus_repeatingTableHeader").find("td");
			var width=0;
			if(tds.size()>0){
				width=tds.size()*100;
			}
			$(repeatTable[i]).css("width",width+"px");
		}
	},
	getApprovalList:function(){
		$(".approvalList").empty();
		var approvalList_lis=$(".form_remark_holder").find("li");
		if(approvalList_lis.size()>0){
			for(var i=0;i<approvalList_lis.size();i++){
				var li=approvalList_lis.eq(i);
				var li_user=li.find(".color_b2>span").eq(0).text();
				var li_time=li.find(".form_remark_time").text();
				var li_status=li.find(".color_b2>b").eq(0).html();
				var li_status_01=li.find(".color_b2").find(".color_b3");
				if(li_status_01.size()>0){
					li_status=li_status+"（"+li_status_01.text()+"）";
				}
				var approvalList_li=$("<li>"+
													"<div class='approval_icon_xian'></div>"+
													"<div class='approval_icon_outer'><span></span></div>"+
													"<div class='approval_text'>"+
													"<p class='handle_status'>"+li_status+"</p>"+
													"<p>办理时间："+li_time+"</p>"+
													"<p>办理用户："+li_user+"</p>"+
													"</div>"+
											"</li>");
		
				$(".approvalList").append(approvalList_li);
			}
		}
	}
}

$$.ready(function(){
	console.log($$.params);

	//关闭新手教程
	$$.params.showTutorial=false;
	//指南页
	if($(".preview_view").size()>0){
		methodGroup.getBs();
	}
   
	//顶部的title
	if($(".preview_view").size()>0){
		var headerTitle=$("<div class='header_title header_title_index'><span class='toLeft'></span>"+$(".xdTitleRow").text()+"<span 								class='toRightTool' style='visibility: hidden;'></span></div>");
	}else{
		var headerTitle=$("<div class='header_title header_title_index'><span class='toLeft'></span>"+$(".xdTitleRow").text()+"<span 								class='toRightTool'></span></div>");
	}
	$("#header_holder").append(headerTitle);
	//回退按钮触发浏览器回退按钮
	$(".header_title .toLeft").click(function(){
		if($$.params.back){
			$(".i-icon-arrow-back").click();
		}else{
			window.history.back();
		}
	})
	//右侧滑出
	var mask=$("<div class='mask'></div>")
	var rightTool=$("<div class='rightTool'></div>")
	$("#nav_menu").after(mask);
	$("#nav_menu").after(rightTool);
	$(".toRightTool").click(function(){
		methodGroup.getMenuGroup();
		methodGroup.addStep();
		$(".rightTool").toggleClass("rightShow");
		$(".mask").toggleClass("maskShow");
	})
	$(".mask").click(function(){
		$(".rightTool").toggleClass("rightShow");
		$(".mask").toggleClass("maskShow");
	})
	//里程碑
	var menuGroupUl=$("<div class='menuGroupUl'></div>");
	var processTu=$('<div class="processTitle"><p>流程进度状态</p><span class="processCount"></span></div>'
								+'<div class="process_tu">'
									+'<ul class="process_tu_left">'
									+'</ul>'
									+'<ul class="process_tu_right"></ul>'
								+'</div>')	;
	$(".rightTool").append(menuGroupUl);
	$(".rightTool").append(processTu);
	var approvalHistory=$('<div class="processTitle"><p>审批历史</p><a href="javascript:;" class="approvalHistoryClick">查看</a></div>');
	$(".rightTool").append(approvalHistory);
	var approvalHistoryContainer=$("<div class='approvalHistoryContainer'>"+
															 "<div class='header_title'><span class='toLeft'></span>审批历史</div>"+
															 "<ul class='approvalList'></ul>"+
														     "</div>");
	$("body").append(approvalHistoryContainer);
	$("#header_holder").append(headerTitle);
	
	
	//弹出审批历史
	$(".approvalHistoryClick").click(function(){
		$(".approvalHistoryContainer").toggleClass("rightShow");
		$("#renderForm").addClass("hidden");
		$(".rightTool").toggleClass("rightShow");
		$(".mask").toggleClass("maskShow");
		methodGroup.getApprovalList();
	})
	$(".approvalHistoryContainer .toLeft").click(function(){
		$(".approvalHistoryContainer").toggleClass("rightShow");
		$("#renderForm").removeClass("hidden");
	})
	if($(".preview_view").size()==0){
		methodGroup.tableFirstTr();
	}
	methodGroup.commandBarBottom();
	//重复节新增按钮优化
	$("body").delegate(".infoplus_addLinkContainerDiv","click",function(){
		$(this).find(".infoplus_addLink").click();
	})
	//重复表
//	methodGroup.getRepeatTable();
})






