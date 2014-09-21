'use strict';

app.factory('GoTData',
    function ($http, $log) {
        return {
            //getIMDBData: function (successcb) {
            //    $http({ method: 'GET', dataType: 'jsonp', url: 'http://www.imdb.com/title/tt0944947' }).
            //       success(function (data, status, headers, config) {
            //           // this callback will be called asynchronously
            //           // when the response is available
            //           //successcb(data);
            //           $log.warn(data, status, headers, config);
            //       }).
            //       error(function (data, status, headers, config) {
            //           // called asynchronously if an error occurs
            //           // or server returns response with an error status.
            //           $log.warn(data, status, headers, config);
            //       });
            event: {
                name: 'Game of Thrones',
                date: '15/09/2014',
                time: '10:30 am',

                //imageUrl: '/angular-seed-0.10.x/app/img/AngularShieldLogo.png',
                sessions: [
                    {
                        id: 0,
                        familyName: 'ESSOS',
                        name: 'Daenerys Gargaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: 'Emilia Clarke is a British actress, she was born in London and grew up in Berkshire, England. Her father is a theatre sound engineer and her mother is a businesswoman. Her father was working on a theatre production of "Show Boat" and her mother took her along to the performance. This is when, at the age of 3, her passion for drama began. She ...',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Daenerys Targaryen (Emilia Clarke) Daenerys is the only daughter of Aerys II Targaryen and Rhaella Targaryen. She is now a princess living in exile, the last of the Targaryens. Daenerys was born in the closing days of Roberts Rebellion after her father, "the mad king" had already been killed. Rhaella and her son Viserys, were evacuated to Dragonstone shortly before Aeryss death, where Rhaella gave birth to Daenerys in the midst of a violent storm that destroyed the remnants of the Targaryen fleet, leading to her moniker, Daenerys Stormborn. Her mother died giving birth. Daenerys and Viserys were saved from capture by Ser Willem Darry and four other loyal men who were able to spirit them away to Braavos. Ser Willem looked after the children until he died several years later, and they were forced out into the streets. They wandered from city to city, ending up in Pentos, where Illyrio Mopatis took them in. Although timid and unsure of herself at first Daenerys grows into a supremely confident warrior women with perhaps the most stringent code of ethics in all the Seven Kingdoms. She believes she is the rightful heir to the Iron Throne and is on a mission to reclaim it.',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 1,
                        familyName: 'The Westerlands',
                        name: 'Cersei Lannister',
                        realLifeName: 'Lena Headey',
                        biography: 'Lena Headey is a British actress, she was born in Bermuda, to parents from Yorkshire, England, where she was also raised. She is the daughter of Sue and John Headey, a police officer. Headey is best known for her appearances in The Brothers Grimm (2005), Possession (2002), and The Remains of the Day (1993). Headey stars as Queen Gorgo, a heroic Spartan woman in the period film 300 (2006), by director Zack Snyder. She was born in Bermuda, where her father, a Yorkshire police cadet, was sent shortly before her birth. She was raised in Bermuda, living on the ocean until she was 5. Back in England, she was brought up in Yorkshire before moving to London in her teens. Headey had not gone to drama school before she became an actress. At the age of 17, Headeys performance in a one-off show in the company of six school friends caught the attention of a casting agent, who took a photo and asked her to audition. Eventually, Headey was cast in Waterland (1992), which became her big-screen debut. She honed her natural acting talent while filming and also took archery classes and horse training. She also took boxing classes in clubs in south London, where a former boxer had been teaching her to spar. During her film career, spanning over 15 years, Headey has shown her range in a variety of roles, playing characters from Amazon-type warriors and action-minded women in The Cave (2005) and The Brothers Grimm (2005), to a lesbian florist in Imagine Me & You (2005). Headeys film career has taken her all over the world. She was in India for the filming of The Jungle Book (1994), then in St. Petersburg, Russia, for filming Onegin (1999), and in Norway for filming of Aberdeen (2000). In 2005 Headey was filming in Romania and in Mexico, then spent four months in Prague, Czech Republic, where a forest was designed and built for filming The Brothers Grimm (2005), with Matt Damon and Heath Ledger. During 2006 Headey was in Canada for the filming of 300 (2006), then went to locations in Bulgaria for shooting The Contractor (2007), and Germany and in Czech Republic for the filming of The Red Baron (2008). She also played Gina McVey in the horror thriller The Brøken (2008), and Elizabeth in Tell Tale (2009). In addition to her film-work, Heady appeared as Sarah Connor in a TV spin-off of the popular "Terminator" film franchise, the FOXs television series Terminator: The Sarah Connor Chronicles (2008). Outside of her acting profession, Headey continued taking boxing lessons in London. She is a vegetarian and also remains loyal to yoga, which she discovered during her work in India. She has never been back to her birthplace in Bermuda; she shares her time between her homes in London, England, and Los Angeles, California.',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Cersei is the daughter of Lord Tywin Lannister, the richest man in all of Westeros and the late Joanna Lannister. She is the wife of King Robert Baratheon and as such is the Queen of the Seven Kingdoms. She is twin sister to Jaime, with whom she maintains a very close relationship. She is elder sister to Tyrion for whom she only has disdain because he is a dwarf and their mother died giving birth to him. Cersei is beautiful, cunning, and ambitious. She is wife to Robert Baratheon in name only, seeking affection elsewhere, but relishes her role as queen. She is fiercely protective of her children Joffrey, Myrcella, and Tommen and is not above taking down others in order to elevate them and the Lannister name. In addition to her ruthlessness, Cersei is also quite funny, with a cutting and quick sense of humor. Because Tywin was often away from their home at Casterly Rock serving as Hand to the King when she was young, Cersei, Jaime, and Tyrion were primarily raised by servants.',
                        born: '03.10.1973',
                        imageUrl: 'http://img1.wikia.nocookie.net/__cb20110622111849/gameofthrones/images/d/df/Cersei_1x01.png'
                    },
                    {
                        id: 2,
                        familyName: 'The North',
                        name: 'Eddard "Ned" Stark',
                        realLifeName: 'Sean Bean',
                        biography: 'Sean Bean, Englands most versatile actor, holds a stellar career spanning every medium for approximately 20 years, in theater, radio, television and movies. Bean was born in Handsworth, Sheffield, West Riding of Yorkshire, to Rita (Tuckwood) and Brian Bean. He worked for his fathers welding firm before he decided to become an actor. He attended RADA in London and appeared in a number of West End stage productions including RSCs "Fair Maid of the West" (Spencer), (1986) and "Romeo and Juliet" (1987) (Romeo) , as well as "Deathwatch" (Lederer) (1985) at the Young Vic and "Killing the Cat" (Danny) (1990) at the Theatre Upstairs. This soulful, green-eyed blondes roles are so varied that his magnetic persona convincing plays angst-ridden villains, as in "Clarissa," passionate lovers like Mellors in "Lady Chatterleys Lover," rough-and-ready soldiers such as Richard Sharpe, heartwrenching warriors as the emotionally torn Boromir in "The Lord of the Rings," and noble Greeks, like Odysseus in "Troy," where his very presence in the film adds grace and validity to the rest of the movie. Recently, he did a turn in Shakespeares "Macbeth," where as the principal lead, he so transfixed the audience that the show was extended in London and critically acclaimed. Bean, however, remains himself, a mans man, and in the glizty world of movies this is a rare thing indeed. Bean resides in London where he enjoys raising his beautiful daughters, his beloved football, and the occasional pint. Bean has three daughters, Lorna, Molly and Evie.',
                        stillAlive: false,
                        notAlive: true,
                        characterDescription: 'Ned Stark is the Lord of Winterfell, Lord Paramount of the North, and Warden of the North.  Ned is the middle son of Lord Rickard Stark of Winterfell, was fostered by Lord Jon Arryn at the Eyrie from the age of eight, where he became good friends with fellow ward Robert Baratheon, the child lord of Storms End and Lord Paramount of the Stormlands.  After Aerys II Targaryen killed his father and older brother, Brandon Stark, he also demanded the heads of both Ned and Robert. Instead of handing the two boys over, Jon Arryn rose up in rebellion. Ned, now Lord of Winterfell with his fathers and brothers deaths, rallied the North and Lord Robert rallied the Stormlands and joined the rebellion. Because Lord Robert had the best claim to the throne, it eventually became known as Roberts Rebellion.  Ned married Catelyn Tully shortly before participating in the decisive Battle of the Trident.  When Ned returned to Winterfell at the end of Roberts Rebellion, he had a bastard son, Jon Snow, by an unknown woman he had met in the South. He raised Jon alongside his five trueborn children Robb, Sansa, Arya, Bran, and Rickon.  Eventually Ned and King Robert would be reunited when Ned went to Kings Landing to become the Hand of the King.  Ned is one of the most staunchly ethical men in Westeros who tries to follow either the letter or the spirit of the law. He is even-tempered, intelligent, warm, and loving and liked by all.',
                        born: '17.04.1959',
                        imageUrl: 'http://static.comicvine.com/uploads/original/8/85165/2005531-eddard_stark.png'
                    },
                    {
                        id: 3,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Desc 1',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 4,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: 'Emilia Clarke is a British actress, she was born in London and grew up in Berkshire, England. Her father is a theatre sound engineer and her mother is a businesswoman. Her father was working on a theatre production of "Show Boat" and her mother took her along to the performance. This is when, at the age of 3, her passion for drama began. She ...',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Daenerys Targaryen (Emilia Clarke) Daenerys is the only daughter of Aerys II Targaryen and Rhaella Targaryen. She is now a princess living in exile, the last of the Targaryens. Daenerys was born in the closing days of Roberts Rebellion after her father, "the mad king" had already been killed. Rhaella and her son Viserys, were evacuated to Dragonstone shortly before Aeryss death, where Rhaella gave birth to Daenerys in the midst of a violent storm that destroyed the remnants of the Targaryen fleet, leading to her moniker, Daenerys Stormborn. Her mother died giving birth. Daenerys and Viserys were saved from capture by Ser Willem Darry and four other loyal men who were able to spirit them away to Braavos. Ser Willem looked after the children until he died several years later, and they were forced out into the streets. They wandered from city to city, ending up in Pentos, where Illyrio Mopatis took them in. Although timid and unsure of herself at first Daenerys grows into a supremely confident warrior women with perhaps the most stringent code of ethics in all the Seven Kingdoms. She believes she is the rightful heir to the Iron Throne and is on a mission to reclaim it.',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 5,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: '',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 6,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Desc 1',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 7,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: 'Emilia Clarke is a British actress, she was born in London and grew up in Berkshire, England. Her father is a theatre sound engineer and her mother is a businesswoman. Her father was working on a theatre production of "Show Boat" and her mother took her along to the performance. This is when, at the age of 3, her passion for drama began. She ...',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Daenerys Targaryen (Emilia Clarke) Daenerys is the only daughter of Aerys II Targaryen and Rhaella Targaryen. She is now a princess living in exile, the last of the Targaryens. Daenerys was born in the closing days of Roberts Rebellion after her father, "the mad king" had already been killed. Rhaella and her son Viserys, were evacuated to Dragonstone shortly before Aeryss death, where Rhaella gave birth to Daenerys in the midst of a violent storm that destroyed the remnants of the Targaryen fleet, leading to her moniker, Daenerys Stormborn. Her mother died giving birth. Daenerys and Viserys were saved from capture by Ser Willem Darry and four other loyal men who were able to spirit them away to Braavos. Ser Willem looked after the children until he died several years later, and they were forced out into the streets. They wandered from city to city, ending up in Pentos, where Illyrio Mopatis took them in. Although timid and unsure of herself at first Daenerys grows into a supremely confident warrior women with perhaps the most stringent code of ethics in all the Seven Kingdoms. She believes she is the rightful heir to the Iron Throne and is on a mission to reclaim it.',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 8,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: '',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 9,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Desc 1',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 10,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: 'Emilia Clarke is a British actress, she was born in London and grew up in Berkshire, England. Her father is a theatre sound engineer and her mother is a businesswoman. Her father was working on a theatre production of "Show Boat" and her mother took her along to the performance. This is when, at the age of 3, her passion for drama began. She ...',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Daenerys Targaryen (Emilia Clarke) Daenerys is the only daughter of Aerys II Targaryen and Rhaella Targaryen. She is now a princess living in exile, the last of the Targaryens. Daenerys was born in the closing days of Roberts Rebellion after her father, "the mad king" had already been killed. Rhaella and her son Viserys, were evacuated to Dragonstone shortly before Aeryss death, where Rhaella gave birth to Daenerys in the midst of a violent storm that destroyed the remnants of the Targaryen fleet, leading to her moniker, Daenerys Stormborn. Her mother died giving birth. Daenerys and Viserys were saved from capture by Ser Willem Darry and four other loyal men who were able to spirit them away to Braavos. Ser Willem looked after the children until he died several years later, and they were forced out into the streets. They wandered from city to city, ending up in Pentos, where Illyrio Mopatis took them in. Although timid and unsure of herself at first Daenerys grows into a supremely confident warrior women with perhaps the most stringent code of ethics in all the Seven Kingdoms. She believes she is the rightful heir to the Iron Throne and is on a mission to reclaim it.',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 11,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: '',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 12,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Desc 1',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 13,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: 'Emilia Clarke is a British actress, she was born in London and grew up in Berkshire, England. Her father is a theatre sound engineer and her mother is a businesswoman. Her father was working on a theatre production of "Show Boat" and her mother took her along to the performance. This is when, at the age of 3, her passion for drama began. She ...',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Daenerys Targaryen (Emilia Clarke) Daenerys is the only daughter of Aerys II Targaryen and Rhaella Targaryen. She is now a princess living in exile, the last of the Targaryens. Daenerys was born in the closing days of Roberts Rebellion after her father, "the mad king" had already been killed. Rhaella and her son Viserys, were evacuated to Dragonstone shortly before Aeryss death, where Rhaella gave birth to Daenerys in the midst of a violent storm that destroyed the remnants of the Targaryen fleet, leading to her moniker, Daenerys Stormborn. Her mother died giving birth. Daenerys and Viserys were saved from capture by Ser Willem Darry and four other loyal men who were able to spirit them away to Braavos. Ser Willem looked after the children until he died several years later, and they were forced out into the streets. They wandered from city to city, ending up in Pentos, where Illyrio Mopatis took them in. Although timid and unsure of herself at first Daenerys grows into a supremely confident warrior women with perhaps the most stringent code of ethics in all the Seven Kingdoms. She believes she is the rightful heir to the Iron Throne and is on a mission to reclaim it.',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 14,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: '',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 15,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Desc 1',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 16,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: 'Emilia Clarke is a British actress, she was born in London and grew up in Berkshire, England. Her father is a theatre sound engineer and her mother is a businesswoman. Her father was working on a theatre production of "Show Boat" and her mother took her along to the performance. This is when, at the age of 3, her passion for drama began. She ...',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Daenerys Targaryen (Emilia Clarke) Daenerys is the only daughter of Aerys II Targaryen and Rhaella Targaryen. She is now a princess living in exile, the last of the Targaryens. Daenerys was born in the closing days of Roberts Rebellion after her father, "the mad king" had already been killed. Rhaella and her son Viserys, were evacuated to Dragonstone shortly before Aeryss death, where Rhaella gave birth to Daenerys in the midst of a violent storm that destroyed the remnants of the Targaryen fleet, leading to her moniker, Daenerys Stormborn. Her mother died giving birth. Daenerys and Viserys were saved from capture by Ser Willem Darry and four other loyal men who were able to spirit them away to Braavos. Ser Willem looked after the children until he died several years later, and they were forced out into the streets. They wandered from city to city, ending up in Pentos, where Illyrio Mopatis took them in. Although timid and unsure of herself at first Daenerys grows into a supremely confident warrior women with perhaps the most stringent code of ethics in all the Seven Kingdoms. She believes she is the rightful heir to the Iron Throne and is on a mission to reclaim it.',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 17,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: '',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 18,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Desc 1',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 19,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: 'Emilia Clarke is a British actress, she was born in London and grew up in Berkshire, England. Her father is a theatre sound engineer and her mother is a businesswoman. Her father was working on a theatre production of "Show Boat" and her mother took her along to the performance. This is when, at the age of 3, her passion for drama began. She ...',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Daenerys Targaryen (Emilia Clarke) Daenerys is the only daughter of Aerys II Targaryen and Rhaella Targaryen. She is now a princess living in exile, the last of the Targaryens. Daenerys was born in the closing days of Roberts Rebellion after her father, "the mad king" had already been killed. Rhaella and her son Viserys, were evacuated to Dragonstone shortly before Aeryss death, where Rhaella gave birth to Daenerys in the midst of a violent storm that destroyed the remnants of the Targaryen fleet, leading to her moniker, Daenerys Stormborn. Her mother died giving birth. Daenerys and Viserys were saved from capture by Ser Willem Darry and four other loyal men who were able to spirit them away to Braavos. Ser Willem looked after the children until he died several years later, and they were forced out into the streets. They wandered from city to city, ending up in Pentos, where Illyrio Mopatis took them in. Although timid and unsure of herself at first Daenerys grows into a supremely confident warrior women with perhaps the most stringent code of ethics in all the Seven Kingdoms. She believes she is the rightful heir to the Iron Throne and is on a mission to reclaim it.',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 20,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: '',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 21,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Desc 1',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 22,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: 'Emilia Clarke is a British actress, she was born in London and grew up in Berkshire, England. Her father is a theatre sound engineer and her mother is a businesswoman. Her father was working on a theatre production of "Show Boat" and her mother took her along to the performance. This is when, at the age of 3, her passion for drama began. She ...',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Daenerys Targaryen (Emilia Clarke) Daenerys is the only daughter of Aerys II Targaryen and Rhaella Targaryen. She is now a princess living in exile, the last of the Targaryens. Daenerys was born in the closing days of Roberts Rebellion after her father, "the mad king" had already been killed. Rhaella and her son Viserys, were evacuated to Dragonstone shortly before Aeryss death, where Rhaella gave birth to Daenerys in the midst of a violent storm that destroyed the remnants of the Targaryen fleet, leading to her moniker, Daenerys Stormborn. Her mother died giving birth. Daenerys and Viserys were saved from capture by Ser Willem Darry and four other loyal men who were able to spirit them away to Braavos. Ser Willem looked after the children until he died several years later, and they were forced out into the streets. They wandered from city to city, ending up in Pentos, where Illyrio Mopatis took them in. Although timid and unsure of herself at first Daenerys grows into a supremely confident warrior women with perhaps the most stringent code of ethics in all the Seven Kingdoms. She believes she is the rightful heir to the Iron Throne and is on a mission to reclaim it.',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 23,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: '',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 24,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Desc 1',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 25,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: 'Emilia Clarke is a British actress, she was born in London and grew up in Berkshire, England. Her father is a theatre sound engineer and her mother is a businesswoman. Her father was working on a theatre production of "Show Boat" and her mother took her along to the performance. This is when, at the age of 3, her passion for drama began. She ...',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Daenerys Targaryen (Emilia Clarke) Daenerys is the only daughter of Aerys II Targaryen and Rhaella Targaryen. She is now a princess living in exile, the last of the Targaryens. Daenerys was born in the closing days of Roberts Rebellion after her father, "the mad king" had already been killed. Rhaella and her son Viserys, were evacuated to Dragonstone shortly before Aeryss death, where Rhaella gave birth to Daenerys in the midst of a violent storm that destroyed the remnants of the Targaryen fleet, leading to her moniker, Daenerys Stormborn. Her mother died giving birth. Daenerys and Viserys were saved from capture by Ser Willem Darry and four other loyal men who were able to spirit them away to Braavos. Ser Willem looked after the children until he died several years later, and they were forced out into the streets. They wandered from city to city, ending up in Pentos, where Illyrio Mopatis took them in. Although timid and unsure of herself at first Daenerys grows into a supremely confident warrior women with perhaps the most stringent code of ethics in all the Seven Kingdoms. She believes she is the rightful heir to the Iron Throne and is on a mission to reclaim it.',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 26,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: '',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 27,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Desc 1',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 28,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: 'Emilia Clarke is a British actress, she was born in London and grew up in Berkshire, England. Her father is a theatre sound engineer and her mother is a businesswoman. Her father was working on a theatre production of "Show Boat" and her mother took her along to the performance. This is when, at the age of 3, her passion for drama began. She ...',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Daenerys Targaryen (Emilia Clarke) Daenerys is the only daughter of Aerys II Targaryen and Rhaella Targaryen. She is now a princess living in exile, the last of the Targaryens. Daenerys was born in the closing days of Roberts Rebellion after her father, "the mad king" had already been killed. Rhaella and her son Viserys, were evacuated to Dragonstone shortly before Aeryss death, where Rhaella gave birth to Daenerys in the midst of a violent storm that destroyed the remnants of the Targaryen fleet, leading to her moniker, Daenerys Stormborn. Her mother died giving birth. Daenerys and Viserys were saved from capture by Ser Willem Darry and four other loyal men who were able to spirit them away to Braavos. Ser Willem looked after the children until he died several years later, and they were forced out into the streets. They wandered from city to city, ending up in Pentos, where Illyrio Mopatis took them in. Although timid and unsure of herself at first Daenerys grows into a supremely confident warrior women with perhaps the most stringent code of ethics in all the Seven Kingdoms. She believes she is the rightful heir to the Iron Throne and is on a mission to reclaim it.',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 29,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: '',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 30,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Desc 1',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 31,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: 'Emilia Clarke is a British actress, she was born in London and grew up in Berkshire, England. Her father is a theatre sound engineer and her mother is a businesswoman. Her father was working on a theatre production of "Show Boat" and her mother took her along to the performance. This is when, at the age of 3, her passion for drama began. She ...',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Daenerys Targaryen (Emilia Clarke) Daenerys is the only daughter of Aerys II Targaryen and Rhaella Targaryen. She is now a princess living in exile, the last of the Targaryens. Daenerys was born in the closing days of Roberts Rebellion after her father, "the mad king" had already been killed. Rhaella and her son Viserys, were evacuated to Dragonstone shortly before Aeryss death, where Rhaella gave birth to Daenerys in the midst of a violent storm that destroyed the remnants of the Targaryen fleet, leading to her moniker, Daenerys Stormborn. Her mother died giving birth. Daenerys and Viserys were saved from capture by Ser Willem Darry and four other loyal men who were able to spirit them away to Braavos. Ser Willem looked after the children until he died several years later, and they were forced out into the streets. They wandered from city to city, ending up in Pentos, where Illyrio Mopatis took them in. Although timid and unsure of herself at first Daenerys grows into a supremely confident warrior women with perhaps the most stringent code of ethics in all the Seven Kingdoms. She believes she is the rightful heir to the Iron Throne and is on a mission to reclaim it.',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 32,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: '',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 33,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Desc 1',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 34,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: 'Emilia Clarke is a British actress, she was born in London and grew up in Berkshire, England. Her father is a theatre sound engineer and her mother is a businesswoman. Her father was working on a theatre production of "Show Boat" and her mother took her along to the performance. This is when, at the age of 3, her passion for drama began. She ...',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Daenerys Targaryen (Emilia Clarke) Daenerys is the only daughter of Aerys II Targaryen and Rhaella Targaryen. She is now a princess living in exile, the last of the Targaryens. Daenerys was born in the closing days of Roberts Rebellion after her father, "the mad king" had already been killed. Rhaella and her son Viserys, were evacuated to Dragonstone shortly before Aeryss death, where Rhaella gave birth to Daenerys in the midst of a violent storm that destroyed the remnants of the Targaryen fleet, leading to her moniker, Daenerys Stormborn. Her mother died giving birth. Daenerys and Viserys were saved from capture by Ser Willem Darry and four other loyal men who were able to spirit them away to Braavos. Ser Willem looked after the children until he died several years later, and they were forced out into the streets. They wandered from city to city, ending up in Pentos, where Illyrio Mopatis took them in. Although timid and unsure of herself at first Daenerys grows into a supremely confident warrior women with perhaps the most stringent code of ethics in all the Seven Kingdoms. She believes she is the rightful heir to the Iron Throne and is on a mission to reclaim it.',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 35,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: '',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 36,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Desc 1',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 37,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: 'Emilia Clarke is a British actress, she was born in London and grew up in Berkshire, England. Her father is a theatre sound engineer and her mother is a businesswoman. Her father was working on a theatre production of "Show Boat" and her mother took her along to the performance. This is when, at the age of 3, her passion for drama began. She ...',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Daenerys Targaryen (Emilia Clarke) Daenerys is the only daughter of Aerys II Targaryen and Rhaella Targaryen. She is now a princess living in exile, the last of the Targaryens. Daenerys was born in the closing days of Roberts Rebellion after her father, "the mad king" had already been killed. Rhaella and her son Viserys, were evacuated to Dragonstone shortly before Aeryss death, where Rhaella gave birth to Daenerys in the midst of a violent storm that destroyed the remnants of the Targaryen fleet, leading to her moniker, Daenerys Stormborn. Her mother died giving birth. Daenerys and Viserys were saved from capture by Ser Willem Darry and four other loyal men who were able to spirit them away to Braavos. Ser Willem looked after the children until he died several years later, and they were forced out into the streets. They wandered from city to city, ending up in Pentos, where Illyrio Mopatis took them in. Although timid and unsure of herself at first Daenerys grows into a supremely confident warrior women with perhaps the most stringent code of ethics in all the Seven Kingdoms. She believes she is the rightful heir to the Iron Throne and is on a mission to reclaim it.',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 38,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: '',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 39,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Desc 1',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 40,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: 'Emilia Clarke is a British actress, she was born in London and grew up in Berkshire, England. Her father is a theatre sound engineer and her mother is a businesswoman. Her father was working on a theatre production of "Show Boat" and her mother took her along to the performance. This is when, at the age of 3, her passion for drama began. She ...',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Daenerys Targaryen (Emilia Clarke) Daenerys is the only daughter of Aerys II Targaryen and Rhaella Targaryen. She is now a princess living in exile, the last of the Targaryens. Daenerys was born in the closing days of Roberts Rebellion after her father, "the mad king" had already been killed. Rhaella and her son Viserys, were evacuated to Dragonstone shortly before Aeryss death, where Rhaella gave birth to Daenerys in the midst of a violent storm that destroyed the remnants of the Targaryen fleet, leading to her moniker, Daenerys Stormborn. Her mother died giving birth. Daenerys and Viserys were saved from capture by Ser Willem Darry and four other loyal men who were able to spirit them away to Braavos. Ser Willem looked after the children until he died several years later, and they were forced out into the streets. They wandered from city to city, ending up in Pentos, where Illyrio Mopatis took them in. Although timid and unsure of herself at first Daenerys grows into a supremely confident warrior women with perhaps the most stringent code of ethics in all the Seven Kingdoms. She believes she is the rightful heir to the Iron Throne and is on a mission to reclaim it.',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 41,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: '',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 42,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Desc 1',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 43,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: 'Emilia Clarke is a British actress, she was born in London and grew up in Berkshire, England. Her father is a theatre sound engineer and her mother is a businesswoman. Her father was working on a theatre production of "Show Boat" and her mother took her along to the performance. This is when, at the age of 3, her passion for drama began. She ...',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Daenerys Targaryen (Emilia Clarke) Daenerys is the only daughter of Aerys II Targaryen and Rhaella Targaryen. She is now a princess living in exile, the last of the Targaryens. Daenerys was born in the closing days of Roberts Rebellion after her father, "the mad king" had already been killed. Rhaella and her son Viserys, were evacuated to Dragonstone shortly before Aeryss death, where Rhaella gave birth to Daenerys in the midst of a violent storm that destroyed the remnants of the Targaryen fleet, leading to her moniker, Daenerys Stormborn. Her mother died giving birth. Daenerys and Viserys were saved from capture by Ser Willem Darry and four other loyal men who were able to spirit them away to Braavos. Ser Willem looked after the children until he died several years later, and they were forced out into the streets. They wandered from city to city, ending up in Pentos, where Illyrio Mopatis took them in. Although timid and unsure of herself at first Daenerys grows into a supremely confident warrior women with perhaps the most stringent code of ethics in all the Seven Kingdoms. She believes she is the rightful heir to the Iron Throne and is on a mission to reclaim it.',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 44,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: '',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 45,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Desc 1',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 46,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: 'Emilia Clarke is a British actress, she was born in London and grew up in Berkshire, England. Her father is a theatre sound engineer and her mother is a businesswoman. Her father was working on a theatre production of "Show Boat" and her mother took her along to the performance. This is when, at the age of 3, her passion for drama began. She ...',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: 'Daenerys Targaryen (Emilia Clarke) Daenerys is the only daughter of Aerys II Targaryen and Rhaella Targaryen. She is now a princess living in exile, the last of the Targaryens. Daenerys was born in the closing days of Roberts Rebellion after her father, "the mad king" had already been killed. Rhaella and her son Viserys, were evacuated to Dragonstone shortly before Aeryss death, where Rhaella gave birth to Daenerys in the midst of a violent storm that destroyed the remnants of the Targaryen fleet, leading to her moniker, Daenerys Stormborn. Her mother died giving birth. Daenerys and Viserys were saved from capture by Ser Willem Darry and four other loyal men who were able to spirit them away to Braavos. Ser Willem looked after the children until he died several years later, and they were forced out into the streets. They wandered from city to city, ending up in Pentos, where Illyrio Mopatis took them in. Although timid and unsure of herself at first Daenerys grows into a supremely confident warrior women with perhaps the most stringent code of ethics in all the Seven Kingdoms. She believes she is the rightful heir to the Iron Throne and is on a mission to reclaim it.',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    },
                    {
                        id: 47,
                        familyName: 'ESSOS',
                        name: 'Daenerys Targaryen',
                        realLifeName: 'Emilia Clarke',
                        biography: '',
                        stillAlive: true,
                        notAlive: false,
                        characterDescription: '',
                        born: '01.05.1987',
                        imageUrl: 'http://fc09.deviantart.net/fs70/f/2013/095/a/1/petespainting_by_uptownpete-d60krgi.png'
                    }
                ]

            }
        }
    }
);