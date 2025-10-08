import os,subprocess,sys,io


class GlobalImportes():
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    BASE_PARENT = os.path.dirname(BASE_DIR)
    
    # Caminho do Projeto
    Path = os.path.join(BASE_PARENT,"CifraLivre_Folders")
    Path_Download = os.path.join(Path,"Download")
    Path_DB = os.path.join(Path,"database.db")
    Path_Frontend = os.path.join(BASE_PARENT,"Frontend")
    
    # Port
    Port_Flask = 5120
    
    # Criar as Pastas
    
    if not os.path.exists(Path):
        os.makedirs(Path,exist_ok=True)
        os.makedirs(Path_Download,exist_ok=True)
        os.makedirs(Path_DB,exist_ok=True)
        

    def FormatoUTF():
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8") # Assim, qualquer print() vai usar UTF-8.
