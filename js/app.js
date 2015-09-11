var artList = angular.module('artList', []);

artList.controller('ArtListCtrl', function ($scope) {
  $scope.artWorks = [
           {
          'link': "festivale.jpg",
          'alt': "Festival",
          'name': "01 Festival Delle Arti - Harry Marinksy",
          'small': "2005 Clay Center, Lee Street and Leon Sullivan Way",
          'description': "The Clay Center seeks works that invite the public to interact with the art. Often one finds children joining in the parade of these six, bronze-cast costumed children. This playful sculpture encourages children to explore creativity and the arts."
       },

        {
          'link': "hallelujah.jpg",
          'alt': "Hallelujah",
          'name': "02 Hallelujah - Albert Paley",
          'small': "2009 Clay Center, Lee Street and Leon Sullivan Way",
          'description': "Sixty-four feet tall and forty feet in diameter, this monumental sculpture marks the entrance to the Clay Center, an invitation to explore the arts and sciences within. The form and shapes of the abstract sculpture seem to reference the programs in the building. Could it be a scientific or musical instrument? A tool for a giant to draw the stars? Step back and enjoy the full magnitude of the work or walk inside and experience its soaring height reminiscent of a cathedral. The artist has completed many works of public art, including the portal gates for the Renwick Gallery of the Smithsonian Institution in Washington, DC. He was the first artist to receive Institute Honors by the American Institute of Architects, the most prestigious award given by the organization to a non-architect."
       },

        {
          'link': "labac.jpg",
          'alt': "Labac",
          'name': "03 Labac - Arthur Gibbons",
          'small': "1988 Clay Center, Lee Street and Brooks Streets",
          'description': "Standing nine feet tall, this sculpture is formed from several pieces of steel that have weathered to a rich, brown patina. The title holds a secret: it is the word “cabal” spelled backwards, meaning a group of insiders engaged in a plot or intrigue. The Clay Center was designed by Kiser Straw and Kolodner of Philadelphia, Pennsylvania and Gates, Calloway, Moore and West of Beckley, West Virginia."
       },

        {
          'link': "arch.jpg",
          'alt': "Arch",
          'name': "04 Charleston Arch - Charles Ginnever",
          'small': "2009 Clay Center, Dickinson and Lee Street",
          'description': "The artist designed this sculpture so the five flattened hexagons can sometimes seem to appear three dimensional. How does the artist create this optical illusion? The artist studied sculpture and photography, and is known for the minimalist style presented in this work. In 1999, Ginnever received the Lee Krasner Foundation Lifetime Achievement Award."
       },

        {
          'link': "wrests.jpg",
          'alt': "Man",
          'name': "05 Man Wrests from the Earth- Milton Horn",
          'small': "1968 Dickinson and Lee street",
          'description': "Born in Russia, the artist immigrated to the United States in 1915. He completed many public artworks across the country. This high basrelief represents the artist’s signature style of allegorical sculpture using figures and objects to tell stories or convey meaning. What story is he telling here?."
       },

        {
          'link': "gassaway.jpg",
          'alt': "Henry",
          'name': "06 Henry Gassaway Davis",
          'small': "1926 Capitol and Lee Streets",
          'description': "Davis was a Senator from West Virginia from 1871-1883, as well as the Democratic candidate for Vice President in 1904. Before his political career, he was a brakeman for Baltimore and Ohio Railroad, later founding the Potomac and Piedmont Coal and Railway Company. Another cast of this sculpture is located at Davis and Elkins College in Elkins, West Virginia."
       },

        {
          'link': "trombonist.jpg",
          'alt': "Trombonist",
          'name': "07 The Trombonist - Mark Blumenstein",
          'small': "1988 Clay Center, Lee Street and Brooks Streets",
          'description': "Davis Park was originally designed by Alice Recknagel Ireys, a prominent landscape architect who completed more than 1,000 projects in her lifetime. One of her most famous landscapes is the Fragrance Garden at the Brooklyn Botanical Garden in New York City, a model for designing gardens for people with disabilities.Across the street from the park at 800 Lee Street is the Kanawha Valley Building. It was built in 1929 as the Kanawha Valley Bank. Designed by architects Alfred C. Bossom and associate architect Charles A. Haviland, it was Charleston’s tallest building for fifty years."
       },

        {
          'link': "bikerack.jpg",
          'alt': "Bike",
          'name': "08 Sulptural Bike Racks - Various Artists",
          'small': "2011 Capitol Street, Capitol Market, Haddad Park, Lee Street Triangle",
          'description': "Charleston’s collection of creative bike racks result from a call for proposals organized by FestivALL Charleston, the city’s annual art festival. They asked artists to submit ideas to blur the lines between street furniture and sculpture. Structural Systems worked with all of the artists, except blacksmith Jeff Fetty, to translate their two dimensional drawings into three dimensional, functional bike racks."
       },

        {
          'link': "fountain.jpg",
          'alt': "Fountain",
          'name': "09 Fountain Sculpture - Robert Cronbach",
          'small': "2009 Kanawha County Public Library, 123 Capitol Street",
          'description': "The artist designed the bronze sculpture and the fountain when the library renovated this former federal building in 1966. What elements of the building inspired this work? What do the shapes of the sculpture resemble? The artist also designed sculpture and fountains for the United Nations General Assembly Building in New York."
       },

        {
          'link': "mortar.jpg",
          'alt': "Mortar",
          'name': "10 Mortar Man- Joseph Mullins",
          'small': "1968 Between 110 and 112 Capitol Street",
          'description': "The artist sculpted this whimsical, diminutive figure during a creativity break while perched on a scaffold. Using mortar left over from the lettering on the building’s façade, he created this two inch tall figure that has a fan club in Charleston and beyond."
       },

        {
          'link': "unity.jpg",
          'alt': "Unity",
          'name': "11 Unity - Vladimir Smirnov and Dr. Cubert Smith",
          'small': "1998 East End of Haddad Riverfront Park",
          'description': "Created through the collaboration of two artists: Smith, of Charleston, and Smirnov, from Russia, the sculpture’s title refers to Charleston’s relationship with its sister city Korolyov. West Virginia was home to Chuck Yeager, the first to break the sound barrier, and rocket boy Homer Hickam. Korolyov is well known as the cradle of Soviet and Russian space exploration. The city is named for Sergey Pavlovich Korolyov, the father of the Russian space program. Since 1997 Korolyov has hosted the International Space Olympics, an annual competition for young people to promote space related research."
       },

         {
          'link': "mural.jpg",
          'alt': "Brick",
          'name': "12 Paint on brick - Bart Davies",
          'small': "2009 One Bridge Place, Dickinson Street Facade",
          'description': "The houses on the side of this building only seem real. They were created in the “trompel’oeil” painting style, which translates to “deceive the eye” from French. Locals call this the “San Francisco Mural,” referring to the architectural style of the houses.This building was designed by architects Yost and Packard for the Lewis and Hubbard Company in 1898."
       },
         {
          'link': "fullness.jpg",
          'alt': "Earth",
          'name': "13 From the Fullness of the Earth - Robert Erle Martens",
          'small': "1941 Boulevard Tower, 1018 Kanawha Boulevard East at Leon Sullivan Way",
          'description': "After studying at the Cranbrook Academy of Art, Martens attended Yale University to study architecture, and later formed the firm Martens and Son Architects with his son Walter. He served as President of the West Virginia Board of Architects. The architect commissioned himself to make this artwork as well as this structure, known as the Union Carbide Building."
       },
         {
          'link': "tree.jpg",
          'alt': "Tree",
          'name': "14 The Annunciation and Tree of Life - John Collier",
          'small': "2008 Sacred Heart Co-Cathedral, Leon Sullivan Way and Virginia Street",
          'description': "Two religious figures reside in the landscaped lot across from Sacred Heart Co-Cathedral in The Annunciation, the Angel Gabriel, standing on a tree stump, and the Virgin Mary, standing next to a fig tree. Tree of Life is the artist’s interpretation of the crucifixion of Jesus Christ.Leon Sullivan Way has some of Charleston’s most outstanding sacred buildings. Saint John’s Episcopal Church, at Quarrier Street, is on the National Register of Historic Places and was designed by Warne, Tucker, Silling and Hutchison, Pursell, Isaac."
       },
         {
          'link': "aspirations.jpg",
          'alt': "Aspirations",
          'name': "15 Aspirations - Alfred Kloke",
          'small': "1984 500 Virginia Street at Laidley Street",
          'description': "This sculpture located in the plaza in front of the United Center is a tall, vertical, abstract piece that serves as the fountain’s focal point. The landscape was designed by noted landscape architect and author William H. Whyte with M. Paul Friedberg and Partners. The sculpture sits in front of a modernist office building designed by Odell and Associates."
       },
         {
          'link': "cabriole.jpg",
          'alt': "Cabriole",
          'name': "16 Cabriole - Jimilu Mason",
          'small': "1980 300 Summers Street at Lee Street",
          'description': "Cabriole is a wonderful example of a sculpture capturing a moment in time. The three male figures depicted here are performing a cabriole, an advanced ballet jump. During the leap, a dancer moves both calves together in the air with a quick, scissors-like motion. The dancers seem frozen in this explosive movement.The sculpture is located at the entry to the BBT building, designed by the Houston architecture firm Wilson, Morris, Crain and Anderson in 1976, who also designed the Astrodome."
       },
         {
          'link': "assisi.jpg",
          'alt': "Saint",
          'name': "17 Saint Francis of Assisi - W.D. Hopen",
          'small': "1988 Clay Center, Lee Street and Brooks Streets",
          'description': "Saint Francis lived from 1186- 1226. Known as the patron saint of animals and the environment, he is usually depicted with creatures. Here he holds a bird and a squirrel."
       },
         {
          'link': "elkdelta.jpg",
          'alt': "Elk",
          'name': "18 Elk Delta - Jim Sanborn",
          'small': "1980 Charleston Civic Center, Clendenin and Lee Streets",
          'description': "Commissioned as a gateway to Charleston, the artist uses bisecting planes of different materials to create an architectural space. Walk through the sculpture and notice how it feels like you are in a series of rooms. The artist has completed many public art commissions, including a sculpture containing a code at the Central Intelligence Agency’s building in Langley, Virginia that has taken more than twenty years to decipher."
       },
         {
          'link': "starburst.jpg",
          'alt': "Starburst",
          'name': "19 Starburst - Linda Howard",
          'small': "1994 Charleston Civic Center, Quarrier Street and Civic Center Drive",
          'description': "This sculpture almost appears to be a drawing, or perhaps a complicated piece of origami, made from aluminum tubes."
       },
         {
          'link': "home.jpg",
          'alt': "Home",
          'name': "20 Home Is Where the Art Is - Various Artists",
          'small': "2008 301 Piedmont Road",
          'description': "This mural, commissioned by Habitat for Humanity of Kanawha and Putnam County, transforms the Re-Store parking lot into a vibrant place. The artists used the concept of home as inspiration.From left to right the artists are: Andy King, Charles Jupiter Hamilton, Kelly Osborn Huffman, Amanda Jane Miller, youth from the East End Family Resource Center led by Rick Goosman, Mark Wolfe, Amy Williams, the advanced art class of Charleston Catholic led by Rebecca Burch, and Dane Klingaman."
         }
      
      
      
      
      
  ];
});



artList.controller('ArtListCtrlEast', function($scope) {
    $scope.artEasts = [
               {
          'link': 'bricks.jpg',
          'alt': 'Bricks',
          'name': '21 East End Artist Bricks Project - Various Artists',
          'small': '2010 1500 block of Washington Street East between Nancy and Maxwell Streets',
          'description': 'The East End of Charleston 2010 is home to many artists, who have been commissioned to improve the streetscape. In addition to these unique bricks, artists painted murals and designed banners for this neighborhood. Shown here clockwise from upper left: Charles Jupiter Hamilton, Rudy Panucci, Joe Bolyard, and Heidi Richardson Evans.'
        },

        {
          'link': 'doubledog.jpg',
          'alt': 'Dog',
          'name': '22 Double Dog Star - Chris Dutch',
          'small': '2008 1588 Washington Street East',
          'description': 'This mural has painted and stained glass components designed by the artist. The central figure, which seems to be standing on a brick-paved street, is flanked by a pair of dogs and several stars.'
        },

        {
          'link': 'outabout.jpg',
          'alt': 'Out',
          'name': '23 Out and About - Rob Cleland',
          'small': '1988 Clay Center, Lee Street and Brooks Streets',
          'description': 'This artist finds inspiration in the figure. In this mural, the artist’s first, he depicts “the flavor of the East End” through people he encountered in the community. Some of the artist’s favorites are the two brothers in the lower left who served as a self-appointed welcoming committee waving at passersby. Do you recognize any East End neighbors?'
        },

        {
          'link': 'glenbrogan.jpg',
          'alt': 'Untitled',
          'name': '24 Untitled - Glen Brogan',
          'small': '2011 1600 Washington Street East',
          'description': 'Dogs, cats, birds, and other creatures are having quite a time dining out, and not on each other, in this mural. The image is reminiscent of neighboring restaurants and pubs.'
        },

        {
          'link': 'pierson.jpg',
          'alt': 'All Together',
          'name': '25 All Together Now - Jeff Pierson',
          'small': '2010 Corner of Franklin Avenue and Greenbrier Street',
          'description': 'This colorful mural depicts community characters and friends of the artist in a parade along the street.'
        },

        {
          'link': 'unionsoldiers.jpg',
          'alt': 'Union',
          'name': '26 Union Soldiers and Sailors Monument - Roy H. Stewart',
          'small': '1930 State Capitol Complex, facing Kanawha Boulevard, East of the Governor’s Mansion',
          'description': 'West Virginia, a border state and part of the Union, was subject to raids by the Confederates. The Capitol Complex includes sculptures that commemorate both Union and Confederate forces..'
        },

        {
          'link': 'lincolnwalks.jpg',
          'alt': 'Abraham',
          'name': '27 Abraham Lincoln Walks at Midnight - Fred Torrey, Bernard Wiepper',
          'small': '1936, 1974 State Capitol Complex South Entrance, on Kanawha Boulevard East',
          'description': 'This contemplative sculpture of Lincoln, America’s sixteenth President, depicts him facing south, wearing a long robe. Torrey was inspired by the poem Lincoln Walks at Midnight by the poet Vachel Lindsay when he created a model for the sculpture. The model was enlarged by Wiepper and cast in bronze to celebrate West Virginia’s 111th birthday.'
        },

        {
          'link': 'capitolfaces.jpg',
          'alt': 'Capitol',
          'name': '28 Capitol Faces - John Donnelly, Sr.',
          'small': '1924 - 1930 The Capitol Building, Kanawha Boulevard East',
          'description': 'Twelve carved mythological figures look out from the keystone position over the arched entrances into the Capitol Building. The figures on the east wing are Hera, Prometheus, and Perseus. Over the east entrance into the main building are Mercury, Vulcan, and Minerva. Over the west entrance to the main building are Vesta, Neptune, and Ceres. Fortuna, Jupiter, and Hercules are located above the entrance to the building’s west wing. Note the details that distinguish these figures from each other. The artist also designed the bronze doors at the United States Supreme Court Building in Washington, DC, in collaboration with his son John Donnelly, Jr.'
        },

        {
          'link': 'stonewall.jpg',
          'alt': 'Stonewall',
          'name': '29 Stonewall Jackson - Sir Moses Jacob Ezekiel',
          'small': '1909 State Capitol Complex, facing Kanawha Boulevard, near California Street',
          'description': 'Thomas Jonathan “Stonewall” Jackson was born in 1824 in what is now Clarksburg, West Virginia. He became a Confederate general during the Civil War, and this sculpture was commissioned by the Daughters of the Confederacy. It was moved to this location when the original Capitol Building burned in 1921. After serving in the Confederate States Army, the American artist lived in Rome, where this sculpture was cast. The high plinth makes observing the details of this sculpture difficult. Why do you think the artist chose such a high plinth?'
        },

        {
          'link': 'mountaineersoldier.jpg',
          'alt': 'Mountaineer',
          'name': '30 Mountaineer Soldier - Henry Kirke Bush-Brown',
          'small': '1912 State Capitol Complex, near intersection of California Avenue and Washington Street East, located on the east side of Building 1, East Wing',
          'description': 'This sculpture depicts a pro-Union citizen militiaman carrying a flag. The two reliefs on the base depict'
        },

        {
          'link': 'booker.jpg',
          'alt': 'Booker',
          'name': '31 Booker T. Washington - W. D. Hopen',
          'small': '1979 State Capitol Complex, 1900 Kanawha Boulevard East, West Wing of Building 1 facing north',
          'description': 'Booker T. Washington lived in the Kanawha Valley of West Virginia from the age of nine to sixteen. This bust was originally made of granite and located west of Malden, West Virginia just miles from the Capitol. It was restored by Hopen and moved to the Capitol grounds in 1979. The artist chose to cast the bust in bronze, placing his original drawings and designs inside the object. The bust is located on its original granite base, created in 1963.'
        },

         {
          'link': 'firefighter.jpg',
          'alt': 'Fallen',
          'name': '32 Fallen Firefighter - James Edward Lykins',
          'small': '1994 State Capitol Complex, outdoor patio at the West Virginia Culture Center',
          'description': 'This sculpture honors law enforcement officers and firefighters of West Virginia who have died in the line of duty.'
        },
         {
          'link': 'fallenpartner.jpg',
          'alt': 'Fallen Partner',
          'name': '33 Fallen Partner - W.D. Hopen',
          'small': '1990 State Capitol Complex, outdoor patio at the West Virginia Culture Center',
          'description': 'This sculpture honors law enforcement officers of West Virginia who have died in the line of duty.'
        },
         {
          'link': 'veteransmemorial.jpg',
          'alt': 'Veteran\'s',
          'name': '34 West Virginia Veterans’ Memorial - P. Joseph Mullins',
          'small': '1996 State Capitol Complex, between the Washington Street East gate house and Building 3',
          'description': 'The artist won the 1987 design competition to create this memorial. The design integrates the bronze figures into an architectural environment. The interior walls include the names of West Virginians who lost their lives in U.S. wars of the 20th century. The figures include an infantryman from WWI, a sailor from WWII, an airman from the Korean War, and a marine from the Vietnam War. The artist conducted extensive research to ensure accuracy in the figures’ clothing and weapons.'
        },
         {
          'link': 'femaleveterans.jpg',
          'alt': 'Female Veteran\'s',
          'name': '35 West Virginia’s Female Veterans Memorial - P. Joseph Mullins',
          'small': '2011 State Capitol Complex, between Building 3 and the West Virginia Veterans’ Memorial',
          'description': 'The figurative sculpture and bronze plaques that constitute this work are the first memorial to honor female soldiers in West Virginia. In addition, this is the only sculpture depicting a woman on the capitol grounds. It was controversial when installed because some felt that it did not depict female veterans of all eras. Mullins chose to represent a female veteran of the Iraqi and Afghanistan wars. Her attire does not represent any particular branch of the service. At about eight feet tall, she stands at eye level with her comrades-in-arms in the Veterans’ Memorial.'
        },
         {
          'link': 'coalminer.jpg',
          'alt': 'Coal',
          'name': '36 The West Virginia Coal Miner - Burl Jones',
          'small': '2002 State Capitol Complex, between the West wing of Building 1 and the visitor’s metered parking lot, accessed via Greenbrier Street and Washington Street East',
          'description': 'This sculpture served as a gathering place during the Upper Big Branch mine disaster in 2010. It continues to be the location where people come to remember the twenty-nine men who lost their lives in that explosion.'
        },
         {
          'link': 'spiritwv.jpg',
          'alt': 'Spirit',
          'name': '37 Spirit of West Virginia - James Edward Lykins',
          'small': '1950 State Capitol Complex, State Office Building 3, Main Entrance Washington Street',
          'description': 'The figure in this relief stands near a rhododendron bush, West Virginia’s state flower. She is surrounded by smaller scenes that depict different industries including farming, timber, and steel. The text beneath her is the state motto in Latin: “Mountaineers Are Always Free.” The artist worked as a painter and a sculptor on many public commissions including the pediment figures at the Philadelphia Museum of Art.'
        },
         {
          'link': 'moses.jpg',
          'alt': 'Moses',
          'name': '38 Moses Before the Burning Bush - Milton Horn',
          'small': '1960 Temple B’Nai Israel 2312 Kanawha Boulevard East',
          'description': 'The relief depicts the Biblical story of Moses and the burning bush. Beneath the relief are rows of bronze Hebrew letters. Rabbi James Cohn described the text, from Exodus 3:14 as, “Ehyeh asher ehyeh, a phrase often rendered in English, “I am that I am.” However, we do not know what the words were meant to convey. They can be translated just as easily, “I am what I am” or “I will be what I will be” or “I will be who I will be” or “I shall prove to be whatsoever I shall prove to be” or even “I will be because I will be.” The reference in Hebrew to God’s name cannot be confidently translated into English.'
        },
         {
          'link': 'soundbeyond.jpg',
          'alt': 'Sound',
          'name': '39 Sound and Beyond - Dr. Cubert Smith',
          'small': '1989 Yeager Airport, Airport Road, Right of Entrance',
          'description': 'The aluminum used in this sculpture suggests the materials used in airplanes. Chuck Yeager for whom the Charleston airport is named was the first to break the sound barrier. The sculpture asks the viewer to consider what might be possible in flight after the sound barrier was broken. In addition to his work as a sculptor, the artist is a well-known community leader and educator who has created works of public art across West Virginia.'
        } 
    ];
});


//artList.controller('ArtListCtrlEast', function($scope) {
  //  $scope.artEasts = [
               

artList.controller('ArtListCtrlWest', function($scope) {
   $scope.artWests = [
        {
          'link': 'kingalfred.jpg',
          'alt': 'King',
          'name': '40 King Alfred and His Court - Jeff Fetty',
          'small': '1990 800 Pennsylvania Avenue and Washington Street',
          'description': 'Alfred the Great, King of England from 871-899 AD, created strong alliances with Welsh leaders. As the daffodil is the national flower of Wales, perhaps this sculpture suggests Alfred surrounded by his allies?'
        },
       {
          'link': 'piertopier.jpg',
          'alt': 'Pier',
          'name': '41 Peer to Pier Mural Project - Various Artists',
          'small': '2011 100 Washington Street West',
          'description': 'The West Side of Charleston is cut off from the city center by the Elk River and a highway. These murals are designed not only to provide content and color beneath the highway for pedestrians and cars to enjoy, but also to link the West Side with the rest of Charleston.'
        },
       {
          'link': 'westsidetile.jpg',
          'alt': 'Tile',
          'name': '42 West Side Tile Mural - Rob Cleland, Jeff Miller',
          'small': '2010 1500 block of Washington Street West',
          'description': 'This six foot tall mural is an example of how a diverse set of individuals can come together to create a community artwork. The mural comprises a series of central images designed by the lead artists accompanied by 400 ceramic tiles painted by residents, business owners, and other community members. How many different symbols do you see in this piece?'
       }
   ]; 
});

artList.controller('ArtListCtrlSouth', function($scope) {
   $scope.artSouths = [
       {
          'link': 'treescape.jpg',
          'alt': 'Trees',
          'name': '43 Treescape - Matt Wallace and Tessie Doty Wallace',
          'small': '2008 1013 Bridge Road',
          'description': 'One of the oldest known metalworking techniques, forging is the process of shaping heated metal. In this case, the artists did not use power tools. The 120 foot long project was forged by hand with a hammer. Their signature is nestled in the tree on two birds. A railing, shaped to reference West Virginia’s rolling hills, complements the 12 foot tree.'
        },
       {
          'link': 'maccorkle_memorial.jpg',
          'alt': 'Memorial',
          'name': '44 MacCorkle Memorial - Artist Unknown',
          'small': '1926 746 Myrtle Road',
          'description': 'Sunrise Mansion was built in 1905 by West Virginia’s ninth governor, William A. MacCorkle. Designed in the Georgian style, the home was placed on the National Register of Historic Places in 1974.Governor MacCorkle created a memorial for his only daughter, Isabel, below the mansion along the Carriage Trail. Created to hold a cast stone sculpture of Jesus, the niche is said to also hold some of the ashes of the daughter and the Governor.'
        },
       {
          'link': 'jefffetty_flowers.jpg',
          'alt': 'Flowers',
          'name': '45 Jeff Fetty',
          'small': '2001 Route 119 and Trace Fork Boulevard',
          'description': 'The artist’s forged flowers adorn the landscape around businesses and homes throughout the state. In 2012, he was named one of the top ten blacksmiths in the world. In creating his work, he describes his goal “to fashion work that brings with it a moment of reflection and tranquility. Perhaps living close to the source as I do helps, but I, the artist, am merely an interpreter. Ultimately, it is the art-form, the age-old craft of blacksmithing that works the magic.'
        }
   ]; 
});