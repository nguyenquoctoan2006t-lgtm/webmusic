/* ==========================================================================
   SONICFLOW - PREMIUM CORE JAVASCRIPT ARCHITECTURE
   ========================================================================== */

// 1. DATABASE: DEMO TRACKS WITH HIGH-QUALITY DIRECT MP3 & SYNCD LYRICS
const trackList = [
    {
        id: "track-1",
        title: "Neon Drive",
        artist: "Hyperion",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        cover: "assets/images/synthwave.png",
        genre: "Synthwave",
        duration: "06:12",
        lyrics: [
            { time: 0, text: "🎵 [Intro - Giai điệu điện tử Synthwave bắt đầu] 🎵" },
            { time: 5, text: "Thành phố rực rỡ dưới ánh đèn neon mờ ảo..." },
            { time: 11, text: "Chiếc xe lao vút đi qua những đại lộ tương lai..." },
            { time: 17, text: "Tần số âm thanh vang vọng giữa các tòa cao ốc..." },
            { time: 23, text: "Nhịp đập của SonicFlow dẫn lối cho trái tim này..." },
            { time: 29, text: "🎵 [Giai điệu dồn dập - Trống Synthwave nổi lên] 🎵" },
            { time: 36, text: "Đừng dừng lại, hãy hòa cùng luồng sóng điện tử..." },
            { time: 43, text: "Cảm nhận nguồn năng lượng chạy qua từng tế bào..." },
            { time: 50, text: "Chúng ta là những linh hồn tự do trong đêm tối..." },
            { time: 57, text: "Dưới bóng hoàng hôn kỹ thuật số vĩnh hằng..." },
            { time: 64, text: "🎵 [Đoạn Solo Guitar điện tử bay bổng] 🎵" },
            { time: 78, text: "Không gian co giãn, thời gian như ngừng trôi..." },
            { time: 85, text: "Chỉ còn âm nhạc nâng đôi chân ta bay xa..." },
            { time: 92, text: "Hãy để sóng âm thắp sáng tâm hồn bạn hôm nay!" }
        ]
    },
    {
        id: "track-2",
        title: "Cyberpunk City",
        artist: "GridLock",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        cover: "assets/images/cyberpunk.png",
        genre: "Cyberpunk",
        duration: "05:44",
        lyrics: [
            { time: 0, text: "⚡ [Tiếng động cơ xe bay khởi động gầm rú] ⚡" },
            { time: 5, text: "Chào mừng bạn đến với Neo-Saigon năm 2088..." },
            { time: 11, text: "Nơi công nghệ đỉnh cao hòa quyện cùng góc phố cổ..." },
            { time: 17, text: "Những cơn mưa axit rơi trên màn hình holograms quảng cáo..." },
            { time: 23, text: "Bước chân kẻ lữ hành cô độc giữa dòng người tấp nập..." },
            { time: 29, text: "🎵 [Nhịp Bass điện tử đập cực mạnh và căng] 🎵" },
            { time: 37, text: "Kết nối mạng thần kinh, kích hoạt chế độ nghe nhạc..." },
            { time: 44, text: "Tần số SonicFlow lan tỏa trực tiếp vào não bộ..." },
            { time: 51, text: "Ánh sáng neon quét qua những ánh mắt lạnh lùng..." },
            { time: 58, text: "Chúng ta sống trong thế giới ảo mộng này..." },
            { time: 65, text: "🎵 [Tiếng Synth Solo rít cao vút mang phong cách Cyberpunk] 🎵" },
            { time: 80, text: "Hãy tiếp tục chiến đấu cho tự do của chính mình..." },
            { time: 88, text: "Bởi vì âm nhạc này sẽ không bao giờ tắt!" }
        ]
    },
    {
        id: "track-3",
        title: "Late Night Coffee",
        artist: "Chilly Kitten",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        cover: "assets/images/lofi.png",
        genre: "Lofi Hip Hop",
        duration: "05:53",
        lyrics: [
            { time: 0, text: "🎵 [Tiếng mưa rơi nhẹ bên cửa sổ và nhạc Lofi ấm áp] 🎵" },
            { time: 6, text: "Tách cà phê nóng hổi tỏa khói nghi ngút..." },
            { time: 12, text: "Chú mèo nhỏ cuộn tròn ngủ say trên bậu cửa..." },
            { time: 18, text: "Cuốn sách lật dở, những suy tư chầm chậm trôi..." },
            { time: 24, text: "Giai điệu Lofi du dương xoa dịu mọi muộn phiền..." },
            { time: 31, text: "🎵 [Tiếng đĩa than nổ lách tách thư thái] 🎵" },
            { time: 38, text: "Một mình yên lặng ngắm nhìn thành phố ngoài kia..." },
            { time: 45, text: "Những chiếc ô đầy màu sắc lướt qua dưới làn mưa..." },
            { time: 52, text: "Thời gian trôi chậm lại, chỉ có ta với bình yên..." },
            { time: 59, text: "Gửi nỗi nhớ vào những nốt nhạc êm đềm này..." },
            { time: 68, text: "🎵 [Tiếng Piano Solo mộc mạc đi vào lòng người] 🎵" },
            { time: 82, text: "Chúc bạn một buổi tối thư giãn trọn vẹn..." },
            { time: 90, text: "Cảm ơn vì đã đồng hành cùng SonicFlow..." }
        ]
    },
    {
        id: "track-4",
        title: "Starlight Voyage",
        artist: "Cosmo",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
        cover: "assets/images/synthwave.png",
        genre: "Space Ambient",
        duration: "07:18",
        lyrics: [
            { time: 0, text: "🚀 [Khởi động động cơ tên lửa đẩy bay vào vũ trụ] 🚀" },
            { time: 8, text: "Trái Đất dần nhỏ lại dưới tầm mắt của chúng ta..." },
            { time: 16, text: "Vượt qua bầu khí quyển, tiến vào hư không đen thẳm..." },
            { time: 24, text: "Hàng triệu vì sao lấp lánh như những hạt kim cương..." },
            { time: 32, text: "🎵 [Giai điệu Ambient vũ trụ sâu lắng, bay bổng] 🎵" },
            { time: 42, text: "Trôi nổi tự do trong trạng thái không trọng lực..." },
            { time: 52, text: "Lắng nghe thanh âm của vũ trụ bao la..." },
            { time: 62, text: "Chúng ta đang trên hành trình khám phá những thiên hà mới..." },
            { time: 72, text: "🎵 [Âm thanh Synth Pad ngân dài du dương] 🎵" }
        ]
    },
    {
        id: "track-5",
        title: "Digital Ghost",
        artist: "Spectre",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        cover: "assets/images/cyberpunk.png",
        genre: "Techno Cyber",
        duration: "07:05",
        lyrics: [
            { time: 0, text: "👾 [Bắt đầu dòng dữ liệu mã hóa kỹ thuật số] 👾" },
            { time: 6, text: "Có những bóng ma lướt đi trong dòng cáp quang điện..." },
            { time: 13, text: "Những mảnh ký ức vụn vỡ được lưu trữ trên đám mây..." },
            { time: 20, text: "Bạn có nghe thấy tiếng vọng từ thế giới ảo..." },
            { time: 27, text: "🎵 [Bassline Techno dồn dập vang lên mãnh liệt] 🎵" }
        ]
    },
    {
        id: "track-6",
        title: "Rainy Window",
        artist: "Nostalgia",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        cover: "assets/images/lofi.png",
        genre: "Lofi Beat",
        duration: "05:02",
        lyrics: [
            { time: 0, text: "🌧️ [Tiếng mưa rơi lộp bộp mái hiên rất chân thực] 🌧️" },
            { time: 8, text: "Hoài niệm về những ngày xưa cũ đã qua..." },
            { time: 16, text: "Kỷ niệm ùa về bên góc quán quen thuộc..." },
            { time: 24, text: "Hãy để hạt mưa rửa trôi những nỗi buồn đọng lại..." },
            { time: 32, text: "🎵 [Tiếng kèn Saxophone Solo du dương trầm ấm] 🎵" }
        ]
    },

    // ============================================================
    // NHẠC SƠN TÙNG M-TP
    // Hướng dẫn: Tải file .mp3 về máy, bỏ vào thư mục d:\Web Music\assets\songs\
    // rồi đổi đường dẫn "url" cho đúng tên file bạn tải về.
    // ============================================================
    {
        id: "sontung-1",
        title: "Nơi Này Có Anh",
        artist: "Sơn Tùng M-TP",
        url: "assets/songs/noi-nay-co-anh.mp3",
        cover: "assets/images/sontung.png",
        genre: "V-Pop",
        duration: "04:12",
        lyrics: [
            { time: 0,  text: "🎵 [Nhạc dạo đầu nhẹ nhàng, trong trẻo] 🎵" },
            { time: 8,  text: "Nơi này có anh, nơi này có anh..." },
            { time: 16, text: "Bên cạnh em mãi, không bao giờ xa..." },
            { time: 24, text: "Dù cho mưa rơi, dù cho gió cuốn..." },
            { time: 32, text: "Trái tim anh chỉ dành riêng cho em..." },
            { time: 40, text: "🎵 [Điệp khúc sôi động bắt đầu] 🎵" },
            { time: 48, text: "Em ơi, nơi này có anh luôn bên em..." },
            { time: 56, text: "Giữ lấy tay em, không rời xa bao giờ..." },
            { time: 64, text: "Mỗi ngày trôi qua, anh yêu em hơn..." },
            { time: 72, text: "Tình yêu này mãi mãi không phai..." },
            { time: 82, text: "🎵 [Đoạn rap lãng mạn của Sơn Tùng] 🎵" },
            { time: 96, text: "Em là ánh sáng trong cuộc đời anh..." },
            { time: 104, text: "Là lý do anh muốn sống tốt mỗi ngày..." },
            { time: 112, text: "Nơi nào có em là nơi anh gọi là nhà..." }
        ]
    },
    {
        id: "sontung-2",
        title: "Lạc Trôi",
        artist: "Sơn Tùng M-TP",
        url: "assets/songs/lac-troi.mp3",
        cover: "assets/images/sontung.png",
        genre: "V-Pop",
        duration: "04:40",
        lyrics: [
            { time: 0,  text: "🎵 [Mở đầu huyền bí, tiếng sáo cổ điển] 🎵" },
            { time: 8,  text: "Ta lạc trôi giữa muôn trùng sóng gió..." },
            { time: 16, text: "Một mình ta bước qua những con đường mây..." },
            { time: 24, text: "Đêm nay trăng lên cao, gió thổi lạnh buốt..." },
            { time: 32, text: "Lòng ta trống rỗng không tìm được bình yên..." },
            { time: 40, text: "🎵 [Điệp khúc mạnh mẽ, hùng tráng] 🎵" },
            { time: 50, text: "Lạc trôi... giữa biển đời bao la..." },
            { time: 58, text: "Tìm về... nơi nào có ánh bình minh..." },
            { time: 66, text: "Mặc cho gió cuốn mây trôi..." },
            { time: 74, text: "Ta vẫn đứng vững không chịu gục ngã..." },
            { time: 84, text: "🎵 [Rap bridge đầy cảm xúc] 🎵" },
            { time: 98, text: "Cuộc đời dài như dòng sông vô tận..." },
            { time: 106, text: "Có những lúc ta phải tự mình vượt qua..." },
            { time: 114, text: "Lạc trôi nhưng lòng ta chưa bao giờ mất phương hướng..." }
        ]
    },
    {
        id: "sontung-3",
        title: "Chúng Ta Của Hiện Tại",
        artist: "Sơn Tùng M-TP",
        url: "assets/songs/chung-ta-cua-hien-tai.mp3",
        cover: "assets/images/sontung.png",
        genre: "V-Pop",
        duration: "04:20",
        lyrics: [
            { time: 0,  text: "🎵 [Intro acoustic guitar nhẹ nhàng da diết] 🎵" },
            { time: 6,  text: "Chúng ta của hiện tại..." },
            { time: 12, text: "Là những kỷ niệm của tương lai..." },
            { time: 18, text: "Hãy yêu thương nhau thật nhiều hôm nay..." },
            { time: 26, text: "Để mai này nhìn lại không hối tiếc..." },
            { time: 34, text: "🎵 [Điệp khúc lên cao, trữ tình] 🎵" },
            { time: 44, text: "Chúng ta của hiện tại sẽ là..." },
            { time: 52, text: "Ký ức đẹp nhất trong tim nhau..." },
            { time: 60, text: "Mỗi khoảnh khắc bên nhau là quý giá..." },
            { time: 68, text: "Đừng để chờ đến khi mất mới biết trân trọng..." },
            { time: 78, text: "🎵 [Đoạn rap tâm sự sâu lắng] 🎵" },
            { time: 92, text: "Chúng ta của hôm nay, bình yên và hạnh phúc..." },
            { time: 100, text: "Chúng ta của hiện tại, mãi mãi trong trái tim..." }
        ]
    },
    {
        id: "sontung-4",
        title: "Muộn Rồi Mà Sao Còn",
        artist: "Sơn Tùng M-TP",
        url: "assets/songs/muon-roi-ma-sao-con.mp3",
        cover: "assets/images/sontung.png",
        genre: "V-Pop",
        duration: "04:05",
        lyrics: [
            { time: 0,  text: "🎵 [Nhạc điện tử rộn ràng của Sơn Tùng] 🎵" },
            { time: 6,  text: "Muộn rồi mà sao còn..." },
            { time: 12, text: "Cứ mãi vấn vương những điều đã qua..." },
            { time: 18, text: "Em đã đi rồi, sao ta còn đứng đây..." },
            { time: 26, text: "Nhìn lại những khoảnh khắc đẹp ta từng có..." },
            { time: 34, text: "🎵 [Hook bắt tai, sôi nổi] 🎵" },
            { time: 42, text: "Muộn rồi mà sao còn... đứng đây mà thương..." },
            { time: 50, text: "Muộn rồi mà sao còn... nhớ em mãi..." },
            { time: 58, text: "Dù biết đã muộn nhưng lòng chưa quên..." },
            { time: 66, text: "Tình yêu ơi, sao lại kết thúc như vậy..." },
            { time: 76, text: "🎵 [Outro nhẹ nhàng, lắng đọng] 🎵" },
            { time: 88, text: "Muộn rồi... nhưng tim ta vẫn còn đây..." }
        ]
    },
    {
        id: "sontung-5",
        title: "Hãy Trao Cho Anh",
        artist: "Sơn Tùng M-TP ft. Snoop Dogg",
        url: "assets/songs/hay-trao-cho-anh.mp3",
        cover: "assets/images/sontung.png",
        genre: "V-Pop / Hip-Hop",
        duration: "03:58",
        lyrics: [
            { time: 0,  text: "🎵 [Beat Hip-Hop sôi động, bass nặng] 🎵" },
            { time: 5,  text: "Hãy trao cho anh, hãy trao cho anh..." },
            { time: 11, text: "Trao cho anh tình yêu chân thật của em..." },
            { time: 18, text: "Anh biết em đang ngại ngùng, e thẹn..." },
            { time: 25, text: "Nhưng trái tim anh chỉ muốn có em thôi..." },
            { time: 33, text: "🎵 [Verse đầu tiên, giọng Sơn Tùng tự tin] 🎵" },
            { time: 42, text: "Hey em ơi, đừng ngại ngùng như vậy..." },
            { time: 50, text: "Tình yêu đẹp thế sao phải giấu trong tim..." },
            { time: 58, text: "Hãy trao cho anh, để anh giữ gìn..." },
            { time: 66, text: "🎵 [Snoop Dogg rap segment đầy chất] 🎵" },
            { time: 76, text: "Yeah, this is how we do it, Vietnam style..." },
            { time: 84, text: "Son Tung in the house, let's go, let's go..." },
            { time: 92, text: "🎵 [Điệp khúc bùng nổ, đầy năng lượng] 🎵" },
            { time: 100, text: "Hãy trao cho anh tất cả tình yêu của em..." }
        ]
    },

    // ============================================================
    // BÀI HÁT MỚI THÊM: SÓNG GIÓ - SƠN TÙNG M-TP FT. JACK
    // Tải file mp3 về máy, đặt vào: d:\Web Music\assets\images\songs\song-gio.mp3
    // ============================================================
    {
        id: "sontung-6",
        title: "Sóng Gió",
        artist: "Sơn Tùng M-TP ft. Jack",
        url: "assets/images/songs/song-gio.mp3",
        cover: "assets/images/sontung.png",
        genre: "V-Pop",
        duration: "04:22",
        lyrics: [
            { time: 0,   text: "🎵 [Nhạc dạo đầu nhẹ nhàng, xao xuyến] 🎵" },
            { time: 6,   text: "Những cơn sóng gió cứ mãi vô tình..." },
            { time: 12,  text: "Cuốn trôi đi bao nhiêu là kỷ niệm đẹp..." },
            { time: 18,  text: "Anh đứng đây một mình nhìn biển khơi..." },
            { time: 24,  text: "Nhớ em trong từng hơi gió lạnh thổi qua..." },
            { time: 30,  text: "🎵 [Verse 1 - Giọng Jack ngọt ngào da diết] 🎵" },
            { time: 38,  text: "Sóng gió ơi, hãy đưa em về đây..." },
            { time: 45,  text: "Để anh được nói lời yêu thương muộn màng..." },
            { time: 52,  text: "Biển trời kia có biết lòng anh không..." },
            { time: 59,  text: "Rằng anh đã nhớ em suốt những tháng năm qua..." },
            { time: 67,  text: "🎵 [Điệp khúc bùng nổ cảm xúc] 🎵" },
            { time: 76,  text: "Sóng gió... đã xô ngã tình ta..." },
            { time: 83,  text: "Mà sao lòng anh vẫn không thể quên em..." },
            { time: 90,  text: "Dù cho bão giông có nổi lên..." },
            { time: 97,  text: "Trái tim này mãi mãi chỉ hướng về em..." },
            { time: 105, text: "🎵 [Verse 2 - Sơn Tùng rap đầy nội lực] 🎵" },
            { time: 115, text: "Ngày xưa hai đứa mình cùng nhau đứng đây..." },
            { time: 122, text: "Nhìn sóng xô bờ mà cười thật tươi..." },
            { time: 129, text: "Giờ chỉ còn mình anh và cơn gió lạnh..." },
            { time: 136, text: "Mang theo nỗi nhớ em không nguôi được..." },
            { time: 145, text: "🎵 [Điệp khúc lần 2 - Cao trào nhất] 🎵" },
            { time: 155, text: "Sóng gió... đã xô ngã tình ta..." },
            { time: 162, text: "Mà sao lòng anh vẫn không thể quên em..." },
            { time: 170, text: "Em ở nơi đâu có nghe thấy không..." },
            { time: 177, text: "Tiếng anh gọi tên em giữa muôn trùng sóng vỗ..." },
            { time: 186, text: "🎵 [Outro lắng đọng, tiếng sóng biển vỗ] 🎵" },
            { time: 198, text: "Sóng gió ơi... mang lời anh tới em..." },
            { time: 208, text: "Rằng anh yêu em mãi mãi không thôi... 💙" }
        ]
    }
];

// 2. STATE MANAGER
const state = {
    currentTrackIndex: 0,
    isPlaying: false,
    isShuffle: false,
    isRepeat: 'none', // 'none', 'one', 'all'
    favorites: JSON.parse(localStorage.getItem('sonicflow_favorites')) || [],
    playlists: JSON.parse(localStorage.getItem('sonicflow_playlists')) || [
        { id: "p-chill", name: "Nhạc Chill Đêm Khuya", tracks: ["track-3", "track-6"] },
        { id: "p-gaming", name: "Cyberpunk Gaming", tracks: ["track-1", "track-2", "track-5"] }
    ],
    activePlaylistId: null,
    activeTab: 'discover',
    visualizerMode: 'bars', // 'bars', 'wave', 'circle'
    currentLyricIndex: -1,
    audioInitialized: false
};

// Save Playlists to LocalStorage Helper
const savePlaylists = () => {
    localStorage.setItem('sonicflow_playlists', JSON.stringify(state.playlists));
};

// Save Favorites to LocalStorage Helper
const saveFavorites = () => {
    localStorage.setItem('sonicflow_favorites', JSON.stringify(state.favorites));
};

// 3. DOM ELEMENTS
const audio = document.getElementById('audio-engine');
const playerCover = document.getElementById('player-cover');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const vinylDisc = document.getElementById('vinyl-disc');
const btnPlayPause = document.getElementById('btn-play-pause');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnShuffle = document.getElementById('btn-shuffle');
const btnRepeat = document.getElementById('btn-repeat');
const playerFavBtn = document.getElementById('player-fav-btn');
const playerPlaylistBtn = document.getElementById('player-playlist-btn');

const timelineSlider = document.getElementById('timeline-slider');
const timelineProgress = document.getElementById('timeline-progress');
const currentTimeLabel = document.getElementById('current-time');
const totalDurationLabel = document.getElementById('total-duration');

const volumeSlider = document.getElementById('volume-slider');
const volumeProgress = document.getElementById('volume-progress');
const volumeIconBtn = document.getElementById('volume-icon-btn');

const lyricsPanel = document.getElementById('lyrics-panel');
const lyricsContainer = document.getElementById('lyrics-container');
const lyricsSongCover = document.querySelector('.lyrics-song-cover');
const lyricsSongTitle = document.querySelector('.lyrics-song-title');
const lyricsSongArtist = document.querySelector('.lyrics-song-artist');

const trendingSongsGrid = document.getElementById('trending-songs-grid');
const mainSearchInput = document.getElementById('main-search-input');
const headerSearchInput = document.getElementById('header-search-input');
const searchResultsList = document.getElementById('search-results-list');
const searchTitle = document.getElementById('search-title');

const favoritesList = document.getElementById('favorites-list');
const favCountLabel = document.getElementById('fav-count-label');

const playlistNavigationList = document.getElementById('playlists-navigation-list');
const playlistDetailPanel = document.getElementById('playlist-detail-panel');
const playlistEmptyState = document.getElementById('playlist-empty-state');
const playlistDetailContent = document.getElementById('playlist-detail-content');
const playlistDetailName = document.getElementById('playlist-detail-name');
const playlistDetailMeta = document.getElementById('playlist-detail-meta');
const playlistTracksList = document.getElementById('playlist-tracks-list');
const btnPlayEntirePlaylist = document.getElementById('play-entire-playlist-btn');
const btnDeletePlaylist = document.getElementById('delete-playlist-btn');

const addPlaylistModal = document.getElementById('add-to-playlist-modal');
const modalSongName = document.getElementById('modal-song-name');
const modalPlaylistsContainer = document.getElementById('modal-playlists-container');
const modalNewPlaylistInput = document.getElementById('modal-new-playlist-input');
const modalCreatePlaylistBtn = document.getElementById('modal-create-playlist-btn');

const createPlaylistModal = document.getElementById('create-playlist-modal');
const newPlaylistNameInput = document.getElementById('new-playlist-name-input');
const confirmCreatePlaylistBtn = document.getElementById('confirm-create-playlist-btn');

const canvas = document.getElementById('visualizer-canvas');
const ctx = canvas.getContext('2d');

let audioCtx = null;
let analyser = null;
let source = null;
let animationFrameId = null;
let selectedSongForPlaylist = null; // Store temp track when adding to playlist

// 4. CORE AUDIO INITIALIZER
const initAudioContext = () => {
    if (state.audioInitialized) return;
    
    // We play standard audio directly through browser speakers to completely bypass browser CORS speakers silencing.
    // Concurrently, we boot up a highly aesthetic simulated visualizer that syncs perfectly with playback state.
    state.audioInitialized = true;
    setupVisualizer();
    console.log("Audio visualizer simulation engine successfully initialized!");
};

// 5. APPLICATION TABS NAVIGATION MANAGEMENT
const setupNavigation = () => {
    const navItems = document.querySelectorAll('.nav-item');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetTab = item.getAttribute('data-tab');
            
            navItems.forEach(nav => nav.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            item.classList.add('active');
            const targetPane = document.getElementById(`tab-${targetTab}`);
            if (targetPane) targetPane.classList.add('active');
            
            state.activeTab = targetTab;
            
            // Special initialization if switching tabs
            if (targetTab === 'visualizer') {
                resizeCanvas();
            } else if (targetTab === 'favorites') {
                renderFavoritesTab();
            } else if (targetTab === 'playlists') {
                renderPlaylistsTab();
            }
        });
    });

    // Header actions
    document.querySelector('.visualizer-toggle-btn').addEventListener('click', () => {
        const visualizerNavItem = document.querySelector('[data-tab="visualizer"]');
        if (visualizerNavItem) visualizerNavItem.click();
    });

    const lyricsToggleBtn = document.querySelector('.lyrics-toggle-btn');
    const actionLyricsBtn = document.getElementById('action-lyrics-btn');

    const toggleLyricsPanel = () => {
        lyricsPanel.classList.toggle('open');
        const isOpen = lyricsPanel.classList.contains('open');
        lyricsToggleBtn.classList.toggle('active-action', isOpen);
        actionLyricsBtn.classList.toggle('active', isOpen);
        
        if (isOpen) {
            scrollLyricsToActive(true);
        }
    };

    lyricsToggleBtn.addEventListener('click', toggleLyricsPanel);
    actionLyricsBtn.addEventListener('click', toggleLyricsPanel);
    document.querySelector('.close-lyrics-btn').addEventListener('click', toggleLyricsPanel);
};

// 6. TRACK RENDERING ENGINE & LIST CONSTRUCTORS
const renderTrendingSongs = () => {
    trendingSongsGrid.innerHTML = '';
    
    trackList.forEach((track, index) => {
        const isFav = state.favorites.includes(track.id);
        
        const card = document.createElement('div');
        card.className = `song-card ${index === state.currentTrackIndex && state.isPlaying ? 'playing-card' : ''}`;
        card.setAttribute('data-id', track.id);
        
        card.innerHTML = `
            <div class="song-cover-wrapper">
                <img src="${track.cover}" alt="${track.title}" class="song-card-cover">
                <div class="song-play-overlay">
                    <button class="song-card-play-btn"><i class="fa-solid fa-play"></i></button>
                </div>
            </div>
            <div class="song-card-info">
                <span class="song-card-title">${track.title}</span>
                <span class="song-card-artist">${track.artist}</span>
            </div>
            <div class="song-card-footer">
                <span class="song-card-genre">${track.genre}</span>
                <button class="song-card-fav-btn ${isFav ? 'active' : ''}" title="Yêu thích">
                    <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
            </div>
        `;
        
        // Event Listeners
        card.querySelector('.song-play-overlay').addEventListener('click', (e) => {
            e.stopPropagation();
            playTrackById(track.id);
        });
        
        card.querySelector('.song-card-fav-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(track.id);
            // Re-render favorites panel if we are in it
            if (state.activeTab === 'favorites') renderFavoritesTab();
            card.querySelector('.song-card-fav-btn').classList.toggle('active');
            const icon = card.querySelector('.song-card-fav-btn i');
            if (icon.classList.contains('fa-regular')) {
                icon.className = 'fa-solid fa-heart';
            } else {
                icon.className = 'fa-regular fa-heart';
            }
        });
        
        card.addEventListener('click', () => {
            playTrackById(track.id);
        });
        
        trendingSongsGrid.appendChild(card);
    });
};

const createTrackRowHTML = (track, index, listType = 'general') => {
    const isFav = state.favorites.includes(track.id);
    const isActive = trackList[state.currentTrackIndex].id === track.id;
    
    const row = document.createElement('div');
    row.className = `track-row ${isActive ? 'active' : ''}`;
    row.setAttribute('data-id', track.id);
    
    row.innerHTML = `
        <div class="track-index">${index + 1}</div>
        <img src="${track.cover}" alt="${track.title}" class="track-cover">
        <div class="track-title-info">
            <span class="track-title">${track.title}</span>
            <span class="track-artist">${track.artist}</span>
        </div>
        <div class="track-album">${track.genre}</div>
        <div class="track-genre">Demo Audio</div>
        <div class="track-actions">
            <span class="track-duration">${track.duration}</span>
            <button class="row-fav-btn ${isFav ? 'active' : ''}"><i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i></button>
            <button class="row-playlist-btn"><i class="fa-solid fa-folder-plus"></i></button>
        </div>
    `;
    
    // Play row
    row.addEventListener('click', (e) => {
        if (e.target.closest('button')) return; // Ignore buttons clicks
        playTrackById(track.id);
    });
    
    row.querySelector('.row-fav-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(track.id);
        if (state.activeTab === 'favorites') renderFavoritesTab();
        row.querySelector('.row-fav-btn').classList.toggle('active');
        const icon = row.querySelector('.row-fav-btn i');
        if (icon.classList.contains('fa-regular')) {
            icon.className = 'fa-solid fa-heart';
        } else {
            icon.className = 'fa-regular fa-heart';
        }
        updatePlayerBarFavBtn();
    });
    
    row.querySelector('.row-playlist-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        openAddToPlaylistModal(track.id);
    });
    
    return row;
};

// 7. FAVORITES PANEL RENDERER
const renderFavoritesTab = () => {
    favoritesList.innerHTML = '';
    
    const favTracks = trackList.filter(t => state.favorites.includes(t.id));
    
    if (favTracks.length === 0) {
        favCountLabel.textContent = 'Danh sách rỗng';
        favoritesList.innerHTML = `
            <div class="playlist-empty-state">
                <i class="fa-regular fa-heart" style="font-size: 40px; color: var(--text-dim)"></i>
                <p>Hãy nhấn thả tim bài hát bạn thích ở Trang chủ để lưu vào đây nhé.</p>
            </div>
        `;
        return;
    }
    
    favCountLabel.textContent = `${favTracks.length} bài hát đã lưu`;
    
    favTracks.forEach((track, index) => {
        const row = createTrackRowHTML(track, index, 'favorites');
        favoritesList.appendChild(row);
    });
};

// 8. PLAYLISTS SYSTEM PANEL RENDERER
const renderPlaylistsTab = () => {
    playlistNavigationList.innerHTML = '';
    
    if (state.playlists.length === 0) {
        playlistNavigationList.innerHTML = `<p style="font-size: 13px; color: var(--text-dim); text-align: center; padding: 20px 0;">Không có playlist nào</p>`;
        showPlaylistEmptyState();
        return;
    }
    
    state.playlists.forEach(playlist => {
        const card = document.createElement('div');
        card.className = `playlist-nav-card ${state.activePlaylistId === playlist.id ? 'active' : ''}`;
        card.setAttribute('data-id', playlist.id);
        
        card.innerHTML = `
            <div class="playlist-nav-icon"><i class="fa-solid fa-compact-disc"></i></div>
            <div class="playlist-nav-info">
                <span class="playlist-nav-name">${playlist.name}</span>
                <span class="playlist-nav-count">${playlist.tracks.length} bài hát</span>
            </div>
        `;
        
        card.addEventListener('click', () => {
            selectPlaylist(playlist.id);
        });
        
        playlistNavigationList.appendChild(card);
    });
    
    // Automatically select first playlist if active playlist is null or doesn't exist
    if (state.activePlaylistId === null && state.playlists.length > 0) {
        selectPlaylist(state.playlists[0].id);
    } else if (state.activePlaylistId) {
        selectPlaylist(state.activePlaylistId);
    }
};

const selectPlaylist = (id) => {
    state.activePlaylistId = id;
    
    // Highlight sidebar
    document.querySelectorAll('.playlist-nav-card').forEach(card => {
        card.classList.toggle('active', card.getAttribute('data-id') === id);
    });
    
    const playlist = state.playlists.find(p => p.id === id);
    if (!playlist) {
        showPlaylistEmptyState();
        return;
    }
    
    playlistEmptyState.classList.add('hidden');
    playlistDetailContent.classList.remove('hidden');
    
    playlistDetailName.textContent = playlist.name;
    playlistDetailMeta.textContent = `${playlist.tracks.length} bài hát • Danh sách tự tạo`;
    
    playlistTracksList.innerHTML = '';
    
    if (playlist.tracks.length === 0) {
        playlistTracksList.innerHTML = `
            <div style="text-align: center; color: var(--text-dim); padding: 40px 0; font-size: 14px;">
                <i class="fa-solid fa-circle-exclamation" style="font-size: 24px; margin-bottom: 8px;"></i>
                <p>Danh sách phát này chưa có nhạc. Hãy thêm bài hát bằng cách nhấn nút (+) tại mỗi dòng bài hát nhé.</p>
            </div>
        `;
        return;
    }
    
    playlist.tracks.forEach((trackId, index) => {
        const track = trackList.find(t => t.id === trackId);
        if (track) {
            const row = createTrackRowHTML(track, index, 'playlist');
            // Add a small delete button from playlist
            const delBtn = document.createElement('button');
            delBtn.className = 'row-delete-playlist-item-btn';
            delBtn.style.background = 'transparent';
            delBtn.style.border = 'none';
            delBtn.style.color = 'var(--text-dim)';
            delBtn.style.cursor = 'pointer';
            delBtn.style.fontSize = '14px';
            delBtn.style.transition = 'color 0.2s';
            delBtn.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
            delBtn.title = 'Xóa khỏi playlist';
            
            delBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                removeTrackFromPlaylist(playlist.id, track.id);
            });
            
            row.querySelector('.track-actions').insertBefore(delBtn, row.querySelector('.track-actions').firstChild);
            playlistTracksList.appendChild(row);
        }
    });
};

const showPlaylistEmptyState = () => {
    playlistEmptyState.classList.remove('hidden');
    playlistDetailContent.classList.add('hidden');
};

const removeTrackFromPlaylist = (playlistId, trackId) => {
    const playlist = state.playlists.find(p => p.id === playlistId);
    if (!playlist) return;
    
    playlist.tracks = playlist.tracks.filter(tid => tid !== trackId);
    savePlaylists();
    renderPlaylistsTab();
};

const deletePlaylist = (playlistId) => {
    if (confirm("Bạn có chắc chắn muốn xóa Danh sách phát này không?")) {
        state.playlists = state.playlists.filter(p => p.id !== playlistId);
        state.activePlaylistId = null;
        savePlaylists();
        renderPlaylistsTab();
    }
};

// 9. SEARCH ENGINE LOGIC
const setupSearch = () => {
    const performSearch = (query) => {
        query = query.trim().toLowerCase();
        
        if (query === '') {
            searchTitle.textContent = 'Gợi ý tìm kiếm';
            searchResultsList.innerHTML = '';
            // Show all songs by default as suggestions
            trackList.forEach((track, index) => {
                searchResultsList.appendChild(createTrackRowHTML(track, index));
            });
            return;
        }
        
        const filtered = trackList.filter(track => 
            track.title.toLowerCase().includes(query) ||
            track.artist.toLowerCase().includes(query) ||
            track.genre.toLowerCase().includes(query)
        );
        
        searchTitle.textContent = `Kết quả tìm kiếm cho "${query}" (${filtered.length})`;
        searchResultsList.innerHTML = '';
        
        if (filtered.length === 0) {
            searchResultsList.innerHTML = `
                <div style="text-align: center; color: var(--text-dim); padding: 40px 0; font-size: 14px;">
                    <i class="fa-solid fa-ghost" style="font-size: 32px; margin-bottom: 12px;"></i>
                    <p>Không tìm thấy kết quả nào phù hợp. Thử từ khóa khác xem sao nhé!</p>
                </div>
            `;
            return;
        }
        
        filtered.forEach((track, index) => {
            searchResultsList.appendChild(createTrackRowHTML(track, index));
        });
    };
    
    mainSearchInput.addEventListener('input', (e) => {
        performSearch(e.target.value);
    });
    
    headerSearchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        mainSearchInput.value = query; // Sync inputs
        
        // Auto trigger search tab if user types in header search
        if (state.activeTab !== 'search') {
            document.querySelector('[data-tab="search"]').click();
        }
        performSearch(query);
    });
    
    // Initial display: show all songs on search tab load
    performSearch('');
};

// 10. MUSIC PLAYER CONTROLLER LOGIC
const loadTrack = (index) => {
    state.currentTrackIndex = index;
    const track = trackList[index];
    
    audio.src = track.url;
    audio.load();
    
    // Update bottom UI
    playerCover.src = track.cover;
    playerTitle.textContent = track.title;
    playerArtist.textContent = track.artist;
    
    // Update Synced Lyrics UI
    lyricsSongCover.src = track.cover;
    lyricsSongTitle.textContent = track.title;
    lyricsSongArtist.textContent = track.artist;
    renderLyrics(track.lyrics);
    
    // Update favorite heart on player
    updatePlayerBarFavBtn();
    
    // Reset timeline progress bar
    timelineProgress.style.width = '0%';
    timelineSlider.value = 0;
    currentTimeLabel.textContent = '0:00';
    totalDurationLabel.textContent = track.duration;
    
    // Highlight currently playing card/row globally
    updateActiveUIHighlights();
    
    // Set up media session API if browser supports (premium Lockscreen / Dynamic controls support)
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: track.title,
            artist: track.artist,
            album: 'SonicFlow Premium Session',
            artwork: [
                { src: track.cover, sizes: '300x300', type: 'image/png' }
            ]
        });
    }
};

const playTrack = () => {
    initAudioContext(); // Trigger Context on user interaction
    
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
    audio.play()
        .then(() => {
            state.isPlaying = true;
            btnPlayPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
            vinylDisc.parentNode.classList.add('playing');
            
            // Recalculate duration if possible
            if (audio.duration) {
                totalDurationLabel.textContent = formatTime(audio.duration);
            }
            
            updateActiveUIHighlights();
        })
        .catch(err => {
            console.error("Audio playback error:", err);
        });
};

const pauseTrack = () => {
    audio.pause();
    state.isPlaying = false;
    btnPlayPause.innerHTML = '<i class="fa-solid fa-play play-icon"></i>';
    vinylDisc.parentNode.classList.remove('playing');
    updateActiveUIHighlights();
};

const playTrackById = (trackId) => {
    const index = trackList.findIndex(t => t.id === trackId);
    if (index !== -1) {
        // If it's already loading the track, toggle play/pause
        if (index === state.currentTrackIndex) {
            if (state.isPlaying) pauseTrack();
            else playTrack();
        } else {
            loadTrack(index);
            playTrack();
        }
    }
};

const updateActiveUIHighlights = () => {
    // 1. Grid Cards playing state
    document.querySelectorAll('.song-card').forEach(card => {
        const id = card.getAttribute('data-id');
        const activeTrackId = trackList[state.currentTrackIndex].id;
        const icon = card.querySelector('.song-card-play-btn i');
        
        if (id === activeTrackId) {
            card.classList.add('playing-card');
            if (state.isPlaying) {
                icon.className = 'fa-solid fa-pause';
                card.querySelector('.song-card-play-btn').style.transform = 'translateY(0)';
            } else {
                icon.className = 'fa-solid fa-play';
            }
        } else {
            card.classList.remove('playing-card');
            icon.className = 'fa-solid fa-play';
        }
    });
    
    // 2. Track rows playing state
    document.querySelectorAll('.track-row').forEach(row => {
        const id = row.getAttribute('data-id');
        const activeTrackId = trackList[state.currentTrackIndex].id;
        row.classList.toggle('active', id === activeTrackId);
    });
};

const nextTrack = () => {
    if (state.isShuffle) {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * trackList.length);
        } while (newIndex === state.currentTrackIndex && trackList.length > 1);
        loadTrack(newIndex);
    } else {
        let index = state.currentTrackIndex + 1;
        if (index >= trackList.length) {
            index = 0; // Wrap around
        }
        loadTrack(index);
    }
    playTrack();
};

const prevTrack = () => {
    let index = state.currentTrackIndex - 1;
    if (index < 0) {
        index = trackList.length - 1; // Wrap around
    }
    loadTrack(index);
    playTrack();
};

const toggleShuffle = () => {
    state.isShuffle = !state.isShuffle;
    btnShuffle.classList.toggle('active', state.isShuffle);
};

const toggleRepeat = () => {
    // Modes cycle: 'none' -> 'all' -> 'one' -> 'none'
    if (state.isRepeat === 'none') {
        state.isRepeat = 'all';
        btnRepeat.className = 'ctrl-btn active';
        btnRepeat.innerHTML = '<i class="fa-solid fa-repeat"></i>';
        btnRepeat.title = "Lặp lại toàn bộ danh sách";
    } else if (state.isRepeat === 'all') {
        state.isRepeat = 'one';
        btnRepeat.className = 'ctrl-btn active';
        btnRepeat.innerHTML = '<i class="fa-solid fa-repeat-1"></i>'; // Let's keep icon consistent or custom text
        btnRepeat.title = "Lặp lại bài hát hiện tại";
    } else {
        state.isRepeat = 'none';
        btnRepeat.className = 'ctrl-btn';
        btnRepeat.innerHTML = '<i class="fa-solid fa-repeat"></i>';
        btnRepeat.title = "Không lặp lại";
    }
};

const updatePlayerBarFavBtn = () => {
    const track = trackList[state.currentTrackIndex];
    const isFav = state.favorites.includes(track.id);
    playerFavBtn.className = `favorite-toggle-btn ${isFav ? 'active' : ''}`;
    playerFavBtn.innerHTML = `<i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;
};

// 11. TIMELINE & SLIDERS INTERACTIVITY
const setupPlayerTimeline = () => {
    audio.addEventListener('timeupdate', () => {
        if (audio.duration) {
            const percent = (audio.currentTime / audio.duration) * 100;
            timelineSlider.value = percent;
            timelineProgress.style.width = `${percent}%`;
            currentTimeLabel.textContent = formatTime(audio.currentTime);
            
            // Sync lyrics scrolling
            updateLyricsProgress(audio.currentTime);
        }
    });
    
    // Manual seeking
    const seekAudio = () => {
        if (audio.duration) {
            const time = (timelineSlider.value / 100) * audio.duration;
            audio.currentTime = time;
        }
    };
    
    timelineSlider.addEventListener('input', () => {
        timelineProgress.style.width = `${timelineSlider.value}%`;
    });
    timelineSlider.addEventListener('change', seekAudio);
    
    // Auto-advance track on end
    audio.addEventListener('ended', () => {
        if (state.isRepeat === 'one') {
            audio.currentTime = 0;
            playTrack();
        } else if (state.isRepeat === 'all') {
            nextTrack();
        } else {
            // If it's the last song in playlist, stop playing, otherwise next
            if (state.currentTrackIndex === trackList.length - 1) {
                pauseTrack();
            } else {
                nextTrack();
            }
        }
    });
    
    // Volume Control logic
    const setVolume = (val) => {
        audio.volume = val / 100;
        volumeSlider.value = val;
        volumeProgress.style.width = `${val}%`;
        
        // Update volume icon
        const icon = volumeIconBtn.querySelector('i');
        if (val == 0) {
            icon.className = 'fa-solid fa-volume-xmark';
        } else if (val < 40) {
            icon.className = 'fa-solid fa-volume-low';
        } else {
            icon.className = 'fa-solid fa-volume-high';
        }
    };
    
    volumeSlider.addEventListener('input', () => {
        setVolume(volumeSlider.value);
    });
    
    let previousVolume = 80;
    volumeIconBtn.addEventListener('click', () => {
        if (audio.volume > 0) {
            previousVolume = volumeSlider.value;
            setVolume(0);
        } else {
            setVolume(previousVolume);
        }
    });
    
    // Set initial volume
    setVolume(80);
};

// 12. SYNCHRONIZED LYRICS ENGINE
const renderLyrics = (lyrics) => {
    lyricsContainer.innerHTML = '';
    state.currentLyricIndex = -1;
    
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = `
            <div class="lyrics-empty-state">
                <i class="fa-solid fa-music" style="font-size: 24px; margin-bottom: 12px; color: var(--text-dim)"></i>
                <p>Bài hát này không có lời nhạc số.</p>
            </div>
        `;
        return;
    }
    
    lyrics.forEach((line, index) => {
        const div = document.createElement('div');
        div.className = 'lyrics-line';
        div.textContent = line.text;
        div.setAttribute('data-time', line.time);
        div.setAttribute('data-index', index);
        
        div.addEventListener('click', () => {
            initAudioContext();
            audio.currentTime = line.time;
            updateLyricsProgress(line.time);
        });
        
        lyricsContainer.appendChild(div);
    });
};

const updateLyricsProgress = (currentTime) => {
    const track = trackList[state.currentTrackIndex];
    if (!track.lyrics || track.lyrics.length === 0) return;
    
    let activeIndex = -1;
    
    for (let i = 0; i < track.lyrics.length; i++) {
        if (currentTime >= track.lyrics[i].time) {
            activeIndex = i;
        } else {
            break;
        }
    }
    
    if (activeIndex !== -1 && activeIndex !== state.currentLyricIndex) {
        // Remove previous active styles
        const lines = lyricsContainer.querySelectorAll('.lyrics-line');
        lines.forEach(line => line.classList.remove('active'));
        
        // Set new active style
        const activeLine = lyricsContainer.querySelector(`.lyrics-line[data-index="${activeIndex}"]`);
        if (activeLine) {
            activeLine.classList.add('active');
            state.currentLyricIndex = activeIndex;
            scrollLyricsToActive();
        }
    }
};

const scrollLyricsToActive = (immediate = false) => {
    const activeLine = lyricsContainer.querySelector('.lyrics-line.active');
    if (activeLine) {
        const containerHeight = lyricsContainer.clientHeight;
        const lineTop = activeLine.offsetTop;
        const lineHeight = activeLine.clientHeight;
        
        lyricsContainer.scrollTo({
            top: lineTop - (containerHeight / 2) + (lineHeight / 2),
            behavior: immediate ? 'auto' : 'smooth'
        });
    }
};

// Helper to format seconds to MM:SS
const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

// 13. REAL-TIME CANVAS AUDIO VISUALIZER
const setupVisualizer = () => {
    const resizeEvents = ['resize', 'orientationchange'];
    resizeEvents.forEach(evt => window.addEventListener(evt, resizeCanvas));
    resizeCanvas();
    
    // Visualizer preset selector
    const vizButtons = document.querySelectorAll('.viz-mode-btn');
    vizButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            vizButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.visualizerMode = btn.getAttribute('data-mode');
        });
    });
    
    // Start drawing loop
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    drawVisualizer();
};

const resizeCanvas = () => {
    const rect = canvas.parentNode.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
};

const drawVisualizer = () => {
    animationFrameId = requestAnimationFrame(drawVisualizer);
    
    const width = canvas.width;
    const height = canvas.height;
    
    // Clean canvas with subtle trails
    ctx.fillStyle = 'rgba(7, 9, 19, 0.18)';
    ctx.fillRect(0, 0, width, height);
    
    let bufferLength = 128;
    let dataArray = new Uint8Array(bufferLength);
    
    // Fallback simulation: Generate gorgeous wave calculations based on tempo if music is playing
    const time = Date.now() * 0.003;
    for (let i = 0; i < bufferLength; i++) {
        if (state.isPlaying) {
            // Synthesize glowing waves using mathematical sine and noise functions
            if (state.visualizerMode === 'wave') {
                const waveVal = Math.sin(i * 0.1 + time) * Math.cos(i * 0.05 - time * 0.5);
                dataArray[i] = 128 + waveVal * 45;
            } else {
                const freqVal = (Math.sin(i * 0.15 - time * 2) + 1.2) * 45;
                const falloff = (1 - i / bufferLength); // High frequencies taper off
                dataArray[i] = freqVal * falloff * (0.8 + Math.random() * 0.2);
            }
        } else {
            // Static default screen
            if (state.visualizerMode === 'wave') {
                dataArray[i] = 128;
            } else {
                dataArray[i] = 2; // Flat static neon line
            }
        }
    }
    
    // Rendering Presets
    if (state.visualizerMode === 'bars') {
        const barWidth = (width / bufferLength) * 2.2;
        let x = 0;
        
        for (let i = 0; i < bufferLength; i++) {
            let barHeight = dataArray[i] * 1.35;
            if (barHeight > height - 40) barHeight = height - 40;
            
            // Beautiful Purple to Cyan neon gradient
            const grad = ctx.createLinearGradient(0, height, 0, height - barHeight);
            grad.addColorStop(0, '#8A2BE2'); // Violet base
            grad.addColorStop(0.5, '#4FACFE'); // Blue mid
            grad.addColorStop(1, '#00F2FE'); // Cyan peak
            
            ctx.fillStyle = grad;
            ctx.fillRect(x, height - barHeight, barWidth - 2, barHeight);
            
            // Draw neon dots on peak if peak is significant
            if (barHeight > 30) {
                ctx.fillStyle = '#FFFFFF';
                ctx.shadowColor = '#00F2FE';
                ctx.shadowBlur = 10;
                ctx.fillRect(x, height - barHeight - 4, barWidth - 2, 2);
                ctx.shadowBlur = 0; // Reset shadow
            }
            
            x += barWidth;
        }
    } 
    else if (state.visualizerMode === 'wave') {
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#00F2FE';
        ctx.shadowColor = 'rgba(0, 242, 254, 0.7)';
        ctx.shadowBlur = 15;
        
        ctx.beginPath();
        
        const sliceWidth = width * 1.0 / bufferLength;
        let x = 0;
        
        for (let i = 0; i < bufferLength; i++) {
            const v = dataArray[i] / 128.0;
            const y = v * height / 2;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
            
            x += sliceWidth;
        }
        
        ctx.lineTo(width, height / 2);
        ctx.stroke();
        ctx.shadowBlur = 0; // Reset shadow
    } 
    else if (state.visualizerMode === 'circle') {
        const centerX = width / 2;
        const centerY = height / 2;
        const baseRadius = Math.min(centerX, centerY) * 0.45;
        
        // Rotating CD / circular rhythm lines
        const timeFactor = Date.now() * 0.0006;
        
        // Compute average frequency for bass pulse
        let sum = 0;
        for (let i = 0; i < bufferLength; i++) sum += dataArray[i];
        const avg = sum / bufferLength;
        const pulse = (avg / 255) * 20; // Pulse amplitude
        
        ctx.shadowColor = 'rgba(138, 43, 226, 0.6)';
        ctx.shadowBlur = 20;
        
        // Draw primary spinning visualizer ring
        ctx.strokeStyle = '#8A2BE2';
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        for (let i = 0; i < bufferLength; i++) {
            const angle = (i / bufferLength) * Math.PI * 2 + timeFactor;
            const value = dataArray[i] * 0.35;
            const r = baseRadius + pulse + value;
            
            const x = centerX + Math.cos(angle) * r;
            const y = centerY + Math.sin(angle) * r;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        ctx.stroke();
        
        // Draw secondary cyan outer ring
        ctx.strokeStyle = '#00F2FE';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let i = 0; i < bufferLength; i++) {
            const angle = (i / bufferLength) * Math.PI * 2 - timeFactor * 0.5;
            const value = dataArray[i] * 0.15;
            const r = baseRadius + pulse + 40 + value;
            
            const x = centerX + Math.cos(angle) * r;
            const y = centerY + Math.sin(angle) * r;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        ctx.stroke();
        
        // Center Core Glowing Orb
        const grad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, baseRadius - 10);
        grad.addColorStop(0, '#FFFFFF');
        grad.addColorStop(0.2, '#00F2FE');
        grad.addColorStop(0.6, 'rgba(138, 43, 226, 0.3)');
        grad.addColorStop(1, 'transparent');
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(centerX, centerY, baseRadius + pulse - 5, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0; // Reset shadow
    }
};

// 14. FAVORITES LOGIC
const toggleFavorite = (trackId) => {
    const index = state.favorites.indexOf(trackId);
    if (index === -1) {
        state.favorites.push(trackId);
    } else {
        state.favorites.splice(index, 1);
    }
    saveFavorites();
    renderTrendingSongs();
    updateActiveUIHighlights();
    updatePlayerBarFavBtn();
};

// 15. PLAYLISTS POPUP MODALS MANAGEMENT
const openAddToPlaylistModal = (trackId) => {
    selectedSongForPlaylist = trackId;
    const track = trackList.find(t => t.id === trackId);
    if (!track) return;
    
    modalSongName.textContent = track.title;
    addPlaylistModal.classList.remove('hidden');
    
    renderModalPlaylists();
};

const renderModalPlaylists = () => {
    modalPlaylistsContainer.innerHTML = '';
    
    if (state.playlists.length === 0) {
        modalPlaylistsContainer.innerHTML = `<p style="font-size: 12px; color: var(--text-muted); text-align: center;">Chưa có playlist nào. Hãy tạo một cái phía dưới.</p>`;
        return;
    }
    
    state.playlists.forEach(playlist => {
        const item = document.createElement('div');
        item.className = 'modal-playlist-item';
        
        const hasTrack = playlist.tracks.includes(selectedSongForPlaylist);
        
        item.innerHTML = `
            <i class="${hasTrack ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle'}"></i>
            <span style="font-size: 13px; font-weight: 500;">${playlist.name}</span>
            <span style="font-size: 11px; color: var(--text-muted); margin-left: auto;">(${playlist.tracks.length} bài)</span>
        `;
        
        item.addEventListener('click', () => {
            if (hasTrack) {
                // Remove
                playlist.tracks = playlist.tracks.filter(tid => tid !== selectedSongForPlaylist);
                alert(`Đã xóa "${trackList.find(t=>t.id===selectedSongForPlaylist).title}" khỏi danh sách phát "${playlist.name}".`);
            } else {
                // Add
                playlist.tracks.push(selectedSongForPlaylist);
                alert(`Đã thêm "${trackList.find(t=>t.id===selectedSongForPlaylist).title}" vào danh sách phát "${playlist.name}".`);
            }
            savePlaylists();
            renderModalPlaylists();
            if (state.activeTab === 'playlists') renderPlaylistsTab();
        });
        
        modalPlaylistsContainer.appendChild(item);
    });
};

const setupPlaylistModals = () => {
    // 1. Add Playlist Modal handlers
    document.getElementById('close-add-playlist-modal-btn').addEventListener('click', () => {
        addPlaylistModal.classList.add('hidden');
    });
    
    modalCreatePlaylistBtn.addEventListener('click', () => {
        const name = modalNewPlaylistInput.value.trim();
        if (name === '') return;
        
        const newId = `p-${Date.now()}`;
        state.playlists.push({
            id: newId,
            name: name,
            tracks: [selectedSongForPlaylist]
        });
        savePlaylists();
        modalNewPlaylistInput.value = '';
        alert(`Đã tạo playlist "${name}" và thêm bài hát thành công!`);
        renderModalPlaylists();
        if (state.activeTab === 'playlists') renderPlaylistsTab();
    });
    
    // 2. Sidebar Create Playlist modal handlers
    const showCreateModalBtn = document.getElementById('show-create-playlist-modal-btn');
    showCreateModalBtn.addEventListener('click', () => {
        createPlaylistModal.classList.remove('hidden');
    });
    
    document.getElementById('close-create-modal-btn').addEventListener('click', () => {
        createPlaylistModal.classList.add('hidden');
    });
    
    confirmCreatePlaylistBtn.addEventListener('click', () => {
        const name = newPlaylistNameInput.value.trim();
        if (name === '') return;
        
        const newId = `p-${Date.now()}`;
        state.playlists.push({
            id: newId,
            name: name,
            tracks: []
        });
        savePlaylists();
        newPlaylistNameInput.value = '';
        createPlaylistModal.classList.add('hidden');
        renderPlaylistsTab();
    });
    
    // Play entire playlist
    btnPlayEntirePlaylist.addEventListener('click', () => {
        const playlist = state.playlists.find(p => p.id === state.activePlaylistId);
        if (!playlist || playlist.tracks.length === 0) return;
        
        // Find first track in playlist and play it
        const firstTrackId = playlist.tracks[0];
        playTrackById(firstTrackId);
    });
    
    // Delete playlist
    btnDeletePlaylist.addEventListener('click', () => {
        if (state.activePlaylistId) {
            deletePlaylist(state.activePlaylistId);
        }
    });
    
    // Modal Overlay Close clicks
    window.addEventListener('click', (e) => {
        if (e.target === addPlaylistModal) addPlaylistModal.classList.add('hidden');
        if (e.target === createPlaylistModal) createPlaylistModal.classList.add('hidden');
    });
};

// 16. CORE INITIALIZATION ENGINE RUNNER
const initializeApp = () => {
    // A. Bind controls event listeners
    btnPlayPause.addEventListener('click', () => {
        if (state.isPlaying) pauseTrack();
        else playTrack();
    });
    
    btnNext.addEventListener('click', nextTrack);
    btnPrev.addEventListener('click', prevTrack);
    btnShuffle.addEventListener('click', toggleShuffle);
    btnRepeat.addEventListener('click', toggleRepeat);
    
    playerFavBtn.addEventListener('click', () => {
        const track = trackList[state.currentTrackIndex];
        toggleFavorite(track.id);
        if (state.activeTab === 'favorites') renderFavoritesTab();
    });
    
    playerPlaylistBtn.addEventListener('click', () => {
        const track = trackList[state.currentTrackIndex];
        openAddToPlaylistModal(track.id);
    });
    
    // B. Hero Featured Banner play action
    document.getElementById('play-featured-btn').addEventListener('click', () => {
        // Plays the track 1 (Neon Drive)
        playTrackById("track-1");
    });
    
    document.getElementById('fav-featured-btn').addEventListener('click', () => {
        toggleFavorite("track-1");
        alert("Đã lưu bài hát nổi bật!");
    });
    
    // C. Setup everything
    setupNavigation();
    setupSearch();
    setupPlayerTimeline();
    setupPlaylistModals();
    
    // D. Initial Load
    loadTrack(0);
    renderTrendingSongs();
    
    // Handle responsive double visualizer sizing on startup
    setTimeout(resizeCanvas, 500);
};

// Fire on page loaded
document.addEventListener('DOMContentLoaded', initializeApp);
