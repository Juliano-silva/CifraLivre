import os,subprocess,sys,io


class GlobalImportes():
    Path = r"C:\Users\sustu\CifraLivre"
    Path_comando = r"C:\Users\sustu\OneDrive\Pictures\Programação\Projetos Principais\CifraLivre\Frontend"
    Path_comando_Database = r"C:\Users\sustu\OneDrive\Pictures\Programação\Projetos Principais\CifraLivre\Database"
    Create_download_Folder = os.path.join(Path,"download")
    Create_DB_File = os.path.join(Path,"Banco.db")
    Create_DB_File_TESTE = os.path.join(Path_comando_Database,"api.db")


    # Criar um function que Usa o subprocess
    def NoneFunc():
        subprocess.run(fr'start cmd cd {GlobalImportes.Create_download_Folder} & explorer . & exit',shell=True)

    
    def FormatoUTF():
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8") # Assim, qualquer print() vai usar UTF-8.
