<html>
<head>
	<title>jsmusic</title>
	<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
	<script type='text/javascript' src='./js/player.js'></script>
</head>

<table>
  <thead>
  	<th>
  		<tr>
  		<h1>jsmusic</h1>
  		</tr>
  	</th>
  </thead>
  <tbody>
  	<td>
  	<!--
  	#1 = path/to/audio/file
  	-->
  		<tr>
  			<img id='play' onClick="playAudio('#1')" onMouseOver='selPlay()' onMouseOut='deselPlay()' src='./css/player/play.png' />
			<img id='stop' onClick='stopAudio()' onMouseOver='selStop()' onMouseOut='deselStop()' src='./css/player/stop.png' />
			<img id='rewind' onClick='rewindAudio()' onMouseOver='selRewind()' onMouseOut='deselRewind()' src='./css/player/rewind.png' />
			<img id='ff' onClick='ffAudio()' onMouseOver='selFF()' onMouseOut='deselFF()' src='./css/player/ff.png' />
			<img id='sc' onClick='soundControl()' onMouseOver='selSC()' onMouseOut='deselSC()' src='./css/player/audioON.png' />
			<img id='dl' onClick="dlAudio('#1')" onMouseOver='selDL()' onMouseOut='deselDL()' src='./css/player/download.png' />
			<audio id='myPod'>E: Unsupported browser <a href='http://updateyourbrowser.net/' title='Update your browser'><img src='http://updateyourbrowser.net/uyb.jpg' border='0' alt='Actualitza el teu Navegador' /></a></audio>
  		</tr>
  	</td>
  </tbody>
</table>
</html>
