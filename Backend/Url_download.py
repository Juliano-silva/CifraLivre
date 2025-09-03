from pytubefix import YouTube
from Global import GlobalImportes


def DownloadMusic(url):
    yt = YouTube(url)

    try:
        audio_stream = yt.streams.filter(only_audio=True).first()
        audio_stream.download(filename="blue.mp3",output_path=GlobalImportes.Create_download_Folder)
        print("Baixou com Sucesso")
    except UnicodeEncodeError as e:
        print(e)