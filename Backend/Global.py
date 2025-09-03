import os

class GlobalImportes():
    def __init__(self):
        print(self)
    Path = r"C:\Users\sustu\CifraLivre"
    Create_download_Folder = os.path.join(Path,"download")
    Create_DB_File = "Banco.db"
    Path_comando = r"C:\Users\sustu\OneDrive\Pictures\Programação\Projetos Principais\CifraLivre\Frontend"

    def Rodar():
        print("Rodar o Mundo")

