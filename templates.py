#los nombres de los archivos y eso puede parecer arcaico pero es para poder usarlo con github pages
#renderiza una vez por segundo automaticamente
from jinja2 import Environment, FileSystemLoader
from os import listdir
from time import sleep

tiempo_entre_renderizados = 1 #en segundos

renderizar = listdir("templates")
renderizar.remove("root.html")

templateLoader = FileSystemLoader(searchpath="./templates")
templateEnv = Environment(loader=templateLoader)
ultimo_renderizado_correcto = 0 
while True:
    try:
        for template in renderizar:
            outputText = templateEnv.get_template(template).render()  # this is where to put args to the template renderer
            with open(f"docs/{template}",mode="w",encoding="utf8") as final:
                final.write(outputText)
        ultimo_renderizado_correcto = 0
    except:
        ultimo_renderizado_correcto += tiempo_entre_renderizados
    print(f"Ultimo renderizado correcto hace {ultimo_renderizado_correcto} segundos",end='\r',flush=True)
    sleep(tiempo_entre_renderizados)