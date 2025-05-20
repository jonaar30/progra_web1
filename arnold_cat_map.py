from PIL import Image
import numpy as np

def aplicar_mapa_arnold(ruta_imagen, iteraciones):
    imagen = Image.open(ruta_imagen).convert('RGB')
    pixeles = np.array(imagen)

    alto, ancho = pixeles.shape[0], pixeles.shape[1]
    if alto != ancho:
        raise ValueError("La imagen debe ser cuadrada.")

    tamaño = alto

    for _ in range(iteraciones):
        nueva_imagen = np.zeros_like(pixeles)
        for x in range(tamaño):
            for y in range(tamaño):
                nuevo_x = (x + y) % tamaño
                nuevo_y = (x + 2 * y) % tamaño
                nueva_imagen[nuevo_x, nuevo_y] = pixeles[x, y]
        pixeles = nueva_imagen

    imagen_codificada = Image.fromarray(pixeles)
    return imagen_codificada

def mapa_arnold_inverso(ruta_imagen, iteraciones):
    imagen = Image.open(ruta_imagen).convert('RGB')
    pixeles = np.array(imagen)

    alto, ancho = pixeles.shape[0], pixeles.shape[1]
    if alto != ancho:
        raise ValueError("La imagen debe ser cuadrada.")

    tamaño = alto

    for _ in range(iteraciones):
        nueva_imagen = np.zeros_like(pixeles)
        for x in range(tamaño):
            for y in range(tamaño):
                x_original = (2 * x - y) % tamaño
                y_original = (-x + y) % tamaño
                nueva_imagen[x_original, y_original] = pixeles[x, y]
        pixeles = nueva_imagen

    imagen_recuperada = Image.fromarray(pixeles)
    return imagen_recuperada
