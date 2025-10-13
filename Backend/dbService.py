import sqlite3,os,re
from Global import GlobalImportes
from datetime import datetime


with sqlite3.connect(GlobalImportes.Path_DB,check_same_thread=False) as connection:
    cursor = connection.cursor()
    
    GlobalImportes.FormatoUTF()

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
        cursor.execute(sql,list(Values.values()))
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
    
    def Clear_Table(database):
        cursor.execute(f"DELETE FROM {database}")
        connection.commit()
        
        
    # Vai remover caso ele não esteja na pasta 
    def Folder_Remove():
            try:
                folder_files_cleaned = set()     
                for file_name in GlobalImportes.PathListidr(GlobalImportes.Path_Download):
                    if file_name.lower().endswith(".mp3") and os.path.isfile(os.path.join(GlobalImportes.Path_Download, file_name)):
                        folder_files_cleaned.add(GlobalImportes.PadraoLetter(file_name))
                # Obtém todos os títulos de música do banco de dados
                cursor.execute("SELECT title FROM Musicas")
                db_titles = {row[0] for row in cursor.fetchall()}

                # Identifica os títulos no banco de dados que não têm um arquivo correspondente
                titles_to_remove = db_titles - folder_files_cleaned

                removed_count = 0
                for title in titles_to_remove:
                    cursor.execute("DELETE FROM Musicas WHERE title = ?", (title,))
                    print(f"Registro removido do banco de dados: {title}")
                    removed_count += 1

                connection.commit()
                return f"Processo concluído. {removed_count} registros removidos do banco de dados."

            except Exception as e:
                return f"Ocorreu um erro: {e}"
    
    
    def Folder_Add():
        try:
            Path_Cleaned = set()
            for file in GlobalImportes.PathListidr(GlobalImportes.Path_Download):
                if file.lower().endswith(".mp3") and os.path.isfile(os.path.join(GlobalImportes.Path_Download, file)):
                    Path_Cleaned.add(GlobalImportes.PadraoLetter(file))
                     
            cursor.execute("SELECT title FROM Musicas")
            db_titles = {row[0] for row in cursor.fetchall()}
            
            NotDB = Path_Cleaned - db_titles
            
            for name in NotDB:
                    InsertItem("Musicas",{
                    "ID":None, # Auto Increment
                    "Titulo":f"{name}",
                    "Url":"None",
                    "data_lancamento":f"{datetime.fromtimestamp(os.path.getmtime(rf"{GlobalImportes.Path_Download}\{name}.mp3"))}",
                    "Thumb":"https://i.pinimg.com/1200x/e0/8d/0f/e08d0f1a3981e5a7d4287524a75c0d1a.jpg",
                    "LetraMusic":None, #Letra da Musica
                    "Duration":f"250",
                    "File":None,
                    "Formation":".MP3"
                    })
            
            return "Música Adicionado com Sucesso"

            
        except Exception as e:
            return f"Ocorreu um erro: {e}"
        
# print(SelectItem("Musicas"))
# RemoverItem("Albuns","id_album",2)
# InsertItem("Albuns",(None,"Titulo 3","01-07-2024","https:"))
# UpdateItem("Albuns",{
#     "titulo_album":"Rosa Selvagem",
#     "data_lancamento_album":"01-07-2024",
#     "url_capa_album":"https:"},
#            "id_album",3)