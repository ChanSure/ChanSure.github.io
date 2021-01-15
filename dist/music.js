const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,   
    autoplay: false,  
	lrcType: 3,
    audio: [
	 {
		name: 'secret base ~君がくれたもの~',
		artist: '茅野愛衣 / 戸松遥 / 早見沙織',
		url: 'http://music.163.com/song/media/outer/url?id=33911781.mp3',
		cover: 'http://p1.music.126.net/daZcHVIJicL3wXJWMIjAng==/7926379325753633.jpg?',
		lrc: 'lrc/secret base ~君がくれたもの~.lrc'
	 },
	 {
		name: '亡き王女の為のセプテット',
		artist: '上海アリス幻樂団',
		url: 'http://music.163.com/song/media/outer/url?id=22636723.mp3',
		cover: 'http://p1.music.126.net/DQZWfISsCfzj-sOGsn_vIQ==/785051302254380.jpg?param=130y130',
	 },
	 {
		name: 'My Friend',
		artist: 'SPYAIR',
		url: 'http://music.163.com/song/media/outer/url?id=22682066.mp3',
		cover: 'http://p2.music.126.net/o09Ak-YjSKE5IUmzrSREjA==/18326659812039577.jpg?param=130y130',
		lrc: 'lrc/My Friend.lrc'
	 },
	 {
		name: 'mede:mede',
		artist: 'Reol',
		url: 'https://ro-ki.coding.net/api/share/download/4ad6b208-5b81-42e6-b58b-edf3cd2f6413',
		cover: 'http://p1.music.126.net/ydouSswaFC9GPnx_9SPBow==/109951163739180220.jpg?param=130y130',
		lrc: 'lrc/mede.lrc'
	 },
    ]
});
