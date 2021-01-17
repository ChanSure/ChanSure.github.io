const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,   
    autoplay: false,  
	lrcType: 3,
    audio: [
	 {
		name: 'Shangri-La',
		artist: '今井麻美',
		url: 'http://music.163.com/song/media/outer/url?id=28063305.mp3',
		cover: 'http://p1.music.126.net/8IwJX5w1MEAJOZ4EKZNJcg==/5753744348277523.jpg?param=130y130',
		lrc: '/lrc/Shangri-La.lrc'
	 },
	 {
		name: '六兆年と一夜物語',
		artist: 'Roselia',
		url: 'http://music.163.com/song/media/outer/url?id=1451142196.mp3',
		cover: 'http://p1.music.126.net/RhXIYzCQi2i9jYDfskTdrg==/109951165019174968.jpg?param=130y130',
		lrc: '/lrc/六兆年と一夜物語.lrc'
	 },
	 {
		name: 'My Friend',
		artist: 'SPYAIR',
		url: 'http://music.163.com/song/media/outer/url?id=22682066.mp3',
		cover: 'http://p2.music.126.net/o09Ak-YjSKE5IUmzrSREjA==/18326659812039577.jpg?param=130y130',
		lrc: '/lrc/My Friend.lrc'
	 },
	 {
		name: 'ときめきポポロン♪',
		artist: 'チマメ隊',
		url: 'https://ro-ki.coding.net/api/share/download/12717076-78ce-42bf-8ddc-a83eac2c55f8',
		cover: 'http://p1.music.126.net/mWv4kvetBg-O6EGan7ya6A==/109951165604183458.jpg?param=130y130',
		lrc: '/lrc/ときめきポポロン♪.lrc'
	 },
	 {
		name: '天空カフェテリア',
		artist: 'Petit Rabbit',
		url: 'https://ro-ki.coding.net/api/share/download/7aa87e1f-6230-4d8e-81a3-378ffc8fdc73',
		cover: 'http://p2.music.126.net/NNO1rA_XlM1ymC99YE_-oQ==/109951165387616949.jpg?param=130y130',
		lrc: '/lrc/天空カフェテリア.lrc'
	 },
	 {
		name: 'Daydream cafe',
		artist: 'Petit Rabbit',
		url: 'https://ro-ki.coding.net/api/share/download/95a4a836-a768-4eff-a289-de631191c2e0',
		cover: 'http://p1.music.126.net/zVGVZonxIvnu6ERIigMztg==/109951165603995613.jpg?param=130y130',
		lrc: '/lrc/Daydream cafe.lrc'
	 },
	 {
		name: 'ノーポイッ!',
		artist: 'Petit Rabbit',
		url: 'https://ro-ki.coding.net/api/share/download/737454e6-ccac-4d3e-af51-4c21f0589bdf',
		cover: 'http://p2.music.126.net/mWv4kvetBg-O6EGan7ya6A==/109951165604183458.jpg?param=130y130',
		lrc: '/lrc/ノーポイッ!.lrc'
	 },
	 {
		name: 'なんとなくミライ',
		artist: 'Petit Rabbit',
		url: 'https://ro-ki.coding.net/api/share/download/5d148b13-d884-4ff3-9ff5-51aaf9736271',
		cover: 'http://p1.music.126.net/mWv4kvetBg-O6EGan7ya6A==/109951165604183458.jpg?param=130y130',
		lrc: '/lrc/なんとなくミライ.lrc'
	 },
	 {
		name: 'mede:mede',
		artist: 'Reol',
		url: 'https://ro-ki.coding.net/api/share/download/4ad6b208-5b81-42e6-b58b-edf3cd2f6413',
		cover: 'http://p1.music.126.net/ydouSswaFC9GPnx_9SPBow==/109951163739180220.jpg?param=130y130',
		lrc: '/lrc/mede.lrc'
	 },
	 {
		name: '和乐 千本樱（Cover miku / 镜音）',
		artist: 'Hanser / YUKIri',
		url: 'http://music.163.com/song/media/outer/url?id=437250674.mp3',
		cover: 'http://p1.music.126.net/9GAbSb_hlXPu66HWInJOww==/109951162846052486.jpg?param=130y130',
		lrc: '/lrc/和乐 千本樱.lrc'
	 },
	 {
		name: 'ふわふわ時間',
		artist: '放課後ティータイム',
		url: 'http://music.163.com/song/media/outer/url?id=26201899.mp3',
		cover: 'http://p2.music.126.net/B_sCLXthAHgoVEMIRNU1hw==/109951163559682176.jpg?param=130y130',
		lrc: '/lrc/ふわふわ時間.lrc'
	 },
	 {
		name: 'CHANGE!!!! (M@STER VERSION)',
		artist: '765PRO ALLSTARS',
		url: 'http://music.163.com/song/media/outer/url?id=423227554.mp3',
		cover: 'http://p1.music.126.net/LQn6sIR39G--dXR4lGTHFg==/1372190524982267.jpg?param=130y130',
		lrc: '/lrc/CHANGE!!!!.lrc'
	 },
	 {
		name: 'READY!!',
		artist: '765PRO ALLSTARS',
		url: 'http://music.163.com/song/media/outer/url?id=28381221.mp3',
		cover: 'http://p2.music.126.net/xJtmv6IiljPWv5aRE8VAHA==/109951163379153932.jpg?param=130y130',
		lrc: '/lrc/READY!!.lrc'
	 },
	 {
		name: 'Donde Estas Yolanda?',
		artist: 'Pink Martini',
		url: 'http://music.163.com/song/media/outer/url?id=18212708.mp3',
		cover: 'http://p2.music.126.net/Jza-Jec3MP9K964fW5aLGw==/109951163303879734.jpg?param=130y130',
		lrc: '/lrc/Donde Estas Yolanda.lrc'
	 },
	 {
		name: '神保町哀歌',
		artist: '鈴木愛奈',
		url: 'http://music.163.com/song/media/outer/url?id=1439125412.mp3',
		cover: 'http://p1.music.126.net/vR7O0TyJ8ZhFHPCTDNEjFA==/109951164887330112.jpg?param=130y130',
		lrc: '/lrc/神保町哀歌.lrc'
	 },
	 {
		name: '亡き王女の為のセプテット',
		artist: '上海アリス幻樂団',
		url: 'http://music.163.com/song/media/outer/url?id=22636723.mp3',
		cover: '/http://p1.music.126.net/DQZWfISsCfzj-sOGsn_vIQ==/785051302254380.jpg?param=130y130',
	 },
	 {
		name: 'secret base ~君がくれたもの~',
		artist: '茅野愛衣 / 戸松遥 / 早見沙織',
		url: 'http://music.163.com/song/media/outer/url?id=33911781.mp3',
		cover: 'http://p1.music.126.net/daZcHVIJicL3wXJWMIjAng==/7926379325753633.jpg?',
		lrc: '/lrc/secret base ~君がくれたもの~.lrc'
	 },
    ]
});
