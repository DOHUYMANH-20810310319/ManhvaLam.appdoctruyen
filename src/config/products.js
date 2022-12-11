const products = [
    {
        id: 1,
        name: "Naruto",
        price: 55,
        cate: 'Shounen',
        image: require('../../assets/naruto1.png'),
        description:
            "Mười hai năm trước khi bộ truyện này bắt đầu, con Hồ Ly Chín Đuôi đã tấn công ngôi làng ninja làng Lá (木ノ葉隠れ Konohagakure?). Đủ sức mạnh để khiến sóng thần nổi dậy và san bằng núi non chỉ với một trong số chín cái đuôi của nó, nó đã gây nên sự hỗn loạn tột cùng và giết chóc nhiều người, cho tới khi người lãnh đạo của làng Lá – ngài Hokage Đệ Tứ đã hi sinh để phong ấn con quái vật bằng thuật cấm: Kin Jutsu Ogi! Shiki Fuin (Một thuật cấm phải đánh đổi bằng tính mạng) vào người Naruto khi cậu ta mới sinh. Hokage Đệ Tứ, người được vinh danh vì đã phong ấn con yêu hồ li, mong muốn Naruto được người dân tôn trọng vì đã là thân xác chứa đựng con quái vật",
        rating: 4.7,
    },
    {
        id: 2,
        name: "Bleach",
        price: 55,
        cate: 'Shounen',
        image: require('../../assets/bleach.png'),
        description:
            "Kurosaki Ichigo là một thiếu niên có khả năng nhìn thấy các linh hồn. Cuộc sống của anh thay đổi nhanh chóng bởi sự xuất hiện đột ngột của một Shinigami (những người điều chỉnh dòng chảy của linh hồn giữa thế giới con người và thế giới bên kia), tên là Kuchiki Rukia, người đến thế giới con người để tìm diệt Hollow - những linh hồn lạc lối rất nguy hiểm. Khi Rukia bị thương nặng vì bảo vệ Ichigo khỏi Hollow, cô cố gắng chuyển một nửa số reiatsu (霊圧? nghĩa đen, áp lực tâm linh)) của cô cho Ichigo để anh có thể đánh bại Hollow. Tuy nhiên, Ichigo lấy gần như tất cả sức mạnh của Rukia và biến đổi thành một Shinigami, và nhờ đó anh có thể đánh bại con Hollow dễ dàng. Do sức mạnh của mình bị giảm sút, Rukia mắc kẹt và phải sống trong thế giới con người cho đến khi cô có thể phục hồi sức mạnh của mình. Trong thời gian đó, Ichigo phải đảm nhận vai trò của Rukia như một Shinigami thật sự, chiến đấu với Hollow và hướng dẫn linh hồn đến thế giới bên kia được gọi là Soul Society (尸魂界 (ソウル·ソサエティ) Sōru Sosaeti?)",
        rating: 4.7,
    },
    {
        id: 3,
        name: "Hunter x hunter",
        price: 55,
        cate: 'Shounen',
        image: require('../../assets/hunter.png'),
        description:
            "Hunter X Hunter là câu chuyện về các thợ săn (Hunter) – những người có khả năng thực hiện những nhiệm vụ đặc biệt như săn tìm các báu vật, những loài thú ma thuật, và thậm chí là cả những người khác nữa. Nhưng công việc như vậy đòi hỏi phải được chứng nhận, và cứ một trăm nghìn người thì mới có một người có thể vượt qua được cuộc kiểm tra cực kì khó khăn. Những người vượt qua cuộc kiểm tra này sẽ được quyền đi vào những khu vực cấm, những nơi lưu trữ thông tin tối mật và được gọi là Hunter. Nhân vật chính của Hunter X Hunter là Gon, một cậu bé có ước mong trở thành một thợ săn để có thể tìm được cha mình, một thợ săn huyền thoại. Trên con đường phiêu lưu của mình trong thế giới của Hunter X Hunter, cậu đã gặp Killua, con trai một gia tộc sát thủ số một thế giới, Clapika, tộc nhân duy nhất còn sót lại của tộc Mắt Đỏ, và Leorio, một anh chàng tính tình thẳng thắn với mơ ước trở thành bác sĩ. Cùng nhau, họ đã đối phó với các đối thủ sừng sỏ, những băng nhóm tội phạm khét tiếng, và cả những loài quái vật với sức mạnh và trí thông minh còn hơn cả loài người. Hunter X Hunter hấp dẫn từ cách xây dựng từng nhân vật, tới nội dung độc đáo, có chiều sâu, với cách thắt mở tình huống vô cùng tài tình của tác giả đã khiến cho bộ truyện trở thành một trong những bộ manga được yêu thích nhất từ trước tới nay.",
        rating: 4.7,
    },
    {
        id: 4,
        name: "GTO",
        price: 55,
        cate: 'Jump',
        image: require('../../assets/gto.png'),
        description:
            "Eikichi Onizuka, 22 tuổi và là thành viên của một nhóm Boosoozok(một nhóm đua xe tụ tập lại với nhau từ nhiều thành viên, giống kiểu như băng đảng vậy.) Và Onizuka ước muốn được trở thành người thầy vĩ đại nhất của Nhật Bản sau khi người bạn gái đầu tiên bị cướp đi bởi một ông thầy giáo.Nhưng oái ăm thay, thầy giáo Onizuka lại được phân vào một lớp học với thành tích trong 1 tháng thay 3 lần giáo viên chỉ bởi những trò đùa quái ác mà lũ học trò tinh quái này gây ra. Và thầy giáo vĩ đại Onizuka xuất hiện, thay đổi cả bộ mặt cho trường và cho lớp 7-4 này ^^! Từng bước thầy giải tỏa được những bức xúc của mỗi học trò bởi lòng nhiệt tình và am hiểu suy nghĩ của những học sinh thời nay.Chính nhờ lòng nhiệt tình, ko ngại khó khăn, từng bước Onizuka sensei đã cải hóa được suy nghĩ theo chiều hướng xấu của học sinh, giúp cho những tương lai của đất nước có những suy nghĩ đúng đắn hơn về bản thân, về gia đình và về xã hội",
        rating: 4.7,
    },
    {
        id: 5,
        name: "Fairy tail",
        price: 555,
        cate: 'Jump',
        image: require('../../assets/fairy1.png'),
        description:
            "Lucy là một pháp sư 17 tuổi có thể điều khiển được tinh linh. Cô đã từ bỏ gia đình giàu có của mình để đi gia nhập Fairy Tail, một hội pháp sư rất mạnh ở Fiore, luôn nổi tiếng với việc phá hoại. Trên đường đi, cô gặp gỡ Natsu Dragneel pháp sư của hội Fairy Tail cùng Happy, một chú mèo biết bay. Họ đang đi tìm cha nuôi của Natsu là một con rồng có tên Igneel đã biến mất bảy năm trước đó. Lucy chẳng may bị bắt cóc bởi một pháp sư giả danh Salamander (Hỏa Long), đã từng là một thành viên của Fairy Tail. Natsu giải cứu Lucy, tiết lộ mình là Salamander thực sự và là một Dragon Slayer, pháp sư với khả năng của rồng. Sau khi đánh bại kẻ giả mạo, Natsu mời Lucy gia nhập Fairy Tail. Lucy lập nhóm với Natsu, Happy cùng pháp sư băng Gray Fullbuster, và Erza Scarlet, nữ pháp sư có phép thuật triệu hồi các bộ giáp với vũ khí phép thuật. Họ được giao những nhiệm vụ theo yêu cầu của người dân để thu thập tiền thưởng, chẳng hạn như săn quái vật nhưng không được săn các hội bóng tối (hắc hội).",
        rating: 4.7,
    },
    {
        id: 6,
        name: "Dragon Ball",
        price: 55,
        cate: 'Jump',
        image: require('../../assets/dragon.png'),
        description:
            "Một cậu bé có đuôi khỉ tên là Goku được tìm thấy bởi một ông lão sống một mình trong rừng, ông lão xem đứa bé như là cháu của mình. Một ngày nọ Goku tình cờ gặp một cô gái tên là Bulma trên đường đi bắt cá về, Goku và Bulma đã cùng nhau truy tìm bảy viên ngọc rồng. Bảy viên ngọc rồng chứa đựng một bí mật có thể triệu hồi một con rồng và ban điều ước cho ai sở hữu chúng. Trên cuộc hành trình dài đi tìm bảy viên ngọc rồng, họ gặp những người bạn và những đấu sĩ huyền thoại cũng như nhiều ác quỷ",
        rating: 4.7,
    },
    {
        id: 7,
        name: "Gintama",
        price: 55,
        cate: 'Jump',
        image: require('../../assets/gin.png'),
        description:
            "Gintama (銀魂ぎんたま (Ngân Hồn)? Linh Hồn Bạc), là một bộ manga do Sorachi Hideaki sáng tác và minh họa. Từ ngày 8 tháng 12 năm 2003, loạt truyện được đăng dài kì trên tạp chí Weekly Shōnen Jump của nhà xuất bản Shueisha. Bối cảnh của Gintama là phiên bản hư cấu của kinh thành Edo thế kỷ 19, khi Trái Đất bị các giống người ngoài hành tinh gọi chung là Amanto xâm lược. Câu chuyện xoay quanh cuộc sống thường ngày của samurai hành nghề tự do Sakata Gintoki cùng hai đàn em Shimura Shinpachi và Kagura. Ý tưởng đưa các yếu tố khoa học viễn tưởng vào manga được tác giả Sorachi nghĩ ra sau khi biên tập viên tạp chí gợi ý ông vẽ một bộ manga lịch sử.",
        rating: 4.7,
    },
    {
        id: 8,
        name: "Conan",
        price: 55,
        cate: 'Comedy',
        image: require('../../assets/conan.png'),
        description:
            "Mở đầu câu truyện, cậu học sinh trung học 17 tuổi Shinichi Kudo bị biến thành cậu bé Conan Edogawa. Shinichi trong phần đầu của Thám tử lừng danh Conan được miêu tả là một thám tử học đường xuất sắc. Trong một lần đi chơi công viên Miền Nhiệt đới với cô bạn từ thuở nhỏ Ran Mori, cậu tình cờ chứng kiến vụ một án giết người, Kishida - một hành khách trong trò chơi Chuyến tàu tốc hành đã bị giết một cách dã man. Cậu đã giúp cảnh sát làm sáng tỏ vụ án. Trên đường về nhà, cậu vô tình phát hiện một vụ làm ăn mờ ám của những người đàn ông mặc toàn đồ đen. Khi chúng phát hiện ra cậu, Shinichi đã bị đánh ngất đi. Sau đó những người đàn ông áo đen đó đã cho cậu uống một thứ thuốc độc chưa qua thử nghiệm là Apotoxin-4869 với mục đích thủ tiêu cậu. Tuy nhiên chất độc đã không giết chết Kudo. Khi tỉnh lại, cậu bàng hoàng nhận thấy mình đã bị teo nhỏ lại thành hình dạng của một cậu học sinh tiểu học.",
        rating: 4.7,
    },
];

export default products;