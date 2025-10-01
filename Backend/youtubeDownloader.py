from pytubefix import YouTube
from Global import GlobalImportes
import subprocess
from dbService import DROP_ALL,Create_All,InsertItem


GlobalImportes.FormatoUTF()

Create_All()

def DownloadMusic(url):
    yt = YouTube(url)
    
    try:
        audio_stream = yt.streams.filter(only_audio=True).first()
        audio_stream.download(filename=yt.title+".mp3",output_path=GlobalImportes.Path_Download)
        # subprocess.run(fr'start cmd cd {GlobalImportes.Create_download_Folder} & explorer .',shell=True,creationflags=0x08000000)
        InsertItem("Musicas",(
        None,
        f"{yt.title}",
        f"{url}",
        f"{yt.publish_date}",
        f"{yt.thumbnail_url}",
        None,
        f"{yt.rating}",
        None,
        ".MP3"))
        print("Baixou com Sucesso")
    except UnicodeEncodeError as e:
        print(e)