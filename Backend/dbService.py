import sqlite3
from Global import GlobalImportes


with sqlite3.connect(GlobalImportes.Create_DB_File_TESTE) as connection:
    cursor = connection.cursor()

    cursor.executescript(""" 

    CREATE TABLE if not EXISTS Musicas(
        id_musica INTEGER PRIMARY KEY AUTOINCREMENT,
        title VARCHAR(255) NOT NULL,
        url_download BLOB NOT NULL,
        data_lancamento date,
        url_thumbnail BLOB,
        letra_musica BLOB,
        duration int,
        tamanho_arquivo int,
        formato VARCHAR(10)
    );
                   
    CREATE TABLE IF NOT EXISTS Artistas(
        id_artista INTEGER PRIMARY KEY AUTOINCREMENT,
        nome_artista TEXT NOT NULL UNIQUE
    );

    CREATE TABLE IF NOT EXISTS Albuns(
        id_album INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo_album VARCHAR(255) NOT NULL,
        data_lancamento_album date,
        url_capa_album BLOB
    );


    CREATE TABLE IF NOT EXISTS Generos(
        id_genero INTEGER PRIMARY KEY AUTOINCREMENT,
        nome_genero VARCHAR(100) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS Musicas_Generos(
        id_musica INTEGER,
        id_genero INTEGER,
        PRIMARY KEY(id_musica,id_genero)
        FOREIGN KEY(id_musica) REFERENCES Musicas(id),
        FOREIGN KEY(id_genero) REFERENCES Generos(id)
    );
""")
    connection.commit()