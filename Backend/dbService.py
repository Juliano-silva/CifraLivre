import sqlite3
from Global import GlobalImportes


with sqlite3.connect(GlobalImportes.Path_DB,check_same_thread=False) as connection:
    cursor = connection.cursor()

    def Create_All():
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

    def RemoverItem(DatabaseName,Coluna,Id):
        cursor.execute(f"DELETE FROM {DatabaseName} WHERE {Coluna} = {Id}")
        print(f"Item {Id} Removido Com Sucesso")
        connection.commit()
    
    def InsertItem(DatabaseName,Values):
        placeholders = ",".join("?" * len(Values))
        sql = f"INSERT INTO {DatabaseName} VALUES ({placeholders})"
        cursor.execute(sql,Values)
        connection.commit()
        
    def UpdateItem(Database,newValue,ColunaWhere,Id):
        Keys = list(newValue.keys())
        for key in Keys:
            cursor.execute(f"""
                           UPDATE {Database} SET {key} = ? WHERE {ColunaWhere} = ?
                       """,(newValue[key],Id)
                       )
        connection.commit()
        
    def SelectItem(database):
        res = cursor.execute(f"SELECT * FROM {database}")
        return (res.fetchall())
    
    def DROP_ALL():
        cursor.executescript("""
            DROP TABLE Musicas;
            DROP TABLE Artistas;
            DROP TABLE Albuns;
            DROP TABLE Musicas_Generos;
            DROP TABLE Generos;
        """)

# print(SelectItem("Musicas"))
# RemoverItem("Albuns","id_album",2)
# InsertItem("Albuns",(None,"Titulo 3","01-07-2024","https:"))
# UpdateItem("Albuns",{
#     "titulo_album":"Rosa Selvagem",
#     "data_lancamento_album":"01-07-2024",
#     "url_capa_album":"https:"},
#            "id_album",3)