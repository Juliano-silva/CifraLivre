from dbService import InsertItem

genero_all =["Afrobeats","Alternativo / Indie","Arrocha","Axé","Bachata","Blues","Bolero","Bossa Nova","Brega","Brega-funk",
"Clássico","Corridos","Country","Cuarteto","Cumbia","Dance","Dancehall","Dembow","Disco","Eletrônica","Emocore",
"Experimental","Fado","Flamenco/Bulerías","Folk","Forró","Funk","Funk Internacional","Gospel/Religioso","Grunge",
"Guarânia","Gótico","Hard Rock","Hardcore","Heavy Metal","Hip Hop/Rap","House","Hyperpop","Industrial","Infantil",
"Instrumental","J-Pop/J-Rock","Jazz","Jovem Guarda","K-Pop","MPB","Mambo","Marchas/Hinos","Mariachi","Merengue",
"Metal","Música andina","Música de Banda","Nativista","New Age","New Wave","Pagode","Piseiro","Pop","Pop Rock",
"Post-Rock","Power-Pop","Psicodelia","Punk Rock","R&B","Ranchera","Reggae","Reggaeton","Regional","Rock",
"Rock Alternativo","Rock Progressivo","Rock and Roll","Rockabilly","Romântico","Salsa","Samba","Samba Enredo",
"Sertanejo","Ska","Soft Rock","Soul","Surf Music","Tango","Tecnopop","Trap","Trova","Turreo RKT","Vallenato",
"Velha Guarda","World Music","Xote","Zouk","Zamba"]


for index,genero in enumerate(genero_all):
    InsertItem("Generos",{"id_genero":index,"nome_genero":genero})