$(document).ready(function(){
	var content = document.querySelector('#content');
		load_content(content);

	$('#menu').on('click', function(){
		var menuBar = document.querySelector('#menu-bar');
	    $('#menu-bar').animate({width: "500px"}, 100);
	})

	$('#close').on('click', function(){
		var menuBar = document.querySelector('#menu-bar');
	    $('#menu-bar').animate({width: "0px"}, 100);
	})

	$('#menu-bar #maps').on('click', function(){
		content.innerHTML  = ''+
		'<span class="title">Tempat Tinggal Sekarang.</span><br><br><br><div class="mapouter"><div class="gmap_canvas"><iframe width="611" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=jl%20ngelempongsari%20yogyakarta&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.pureblack.de">Pureblack.de - Webseite erstellen lassen</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:611px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:611px;}</style></div><br><br><br>'
	})

	$('#menu-bar #home').on('click', function(){
		load_content(content)
	})

	function load_content(content){
		content.innerHTML = '<span class="title">Siapa kah saya ???</span>'+
			'<p>'+
				'<div class="sosmet">'+
					'<a target="_blank" href="https://github.com/krisnantobi">Github</a> |'+
					'<a href="">linkIn</a> '+
				'</div>'+
				'<ul>'+
					'<li>Nama saya krisnanto</li>'+
					'<li>Lahir di ponorogo pada 06 Des 1997</li>'+
					'<li>Umur 7 tahun baru masuk TK besar terlambat 2 tahun dari teman seumuran</li>'+
					'<li>tahun 2014 lulus dari SMPN 2 SAMPUNG</li>'+
					'<li>tahun 2017 lulus dari SMKN 1 PONOROGO</li>'+
					'<li>Setelah lulus lanjut ke jogjakarta. Ikut sekolah programer gratis di MIT (Madani International Technology) </li>'+
					'<li>Tidak sampek lulus sudah keluar dan sekarang sedang kuliah</li>'+
				'</ul>'+
			'</p>';
	}
})
