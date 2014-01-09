$().ready(function(){
	$('.boxlist_edit').click(function(){
		 $('.boxlist_this').removeClass('boxlist_this');
		$(this).parent().addClass('boxlist_this');
		}		
	);
	$('.bl_radio').on('click', function(){		
		var _this=$(this),
			$this_list=_this.parent();
		$this_list.children().removeClass('ch_true');
		_this.toggleClass('ch_true');		
	});
	$('.bl_check').on('click', function(){
		var _this=$(this);		
		_this.toggleClass('ch_true');
	});
});

function bl_next(){
	var _this = $('.boxlist_this'),
		list_valid= _this.find('.boxlist_radio').find('.ch_true').length;
	if(list_valid){
		var bl_select=_this.find('.ch_true').text(),
			$list_next=_this.next();
		_this.removeClass('boxlist_this');
		if($list_next.length)$list_next.addClass('boxlist_this');
		else $('#bl_tocart').css('display','block');
		_this.find('.boxlist_edit').css('display','block');
		_this.children('.boxlist_select').html(bl_select);
	}
	else _this.find('.bl_error').html('Выберите позицию из списка.');
}
