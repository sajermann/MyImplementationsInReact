import { useTranslation } from '~/Hooks/UseTranslation';
import { Main } from '~/Components/Main';
import { Section } from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { fabric } from 'fabric';
import { useEffect, useRef, useState } from 'react';

export function PictureAnnotationPage() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const imageUrl =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/800px-Palmeiras_logo.svg.png';

	useEffect(() => {
		if (!canvasRef.current) return;

		const canvas = new fabric.Canvas(canvasRef.current, {
			width: 800,
			height: 800,
			backgroundColor: 'lightgrey',
		});

		fabric.Image.fromURL(imageUrl, img => {
			img.set({
				selectable: false,
			});
			canvas.add(img);
		});

		let rect: fabric.Rect | null = null;
		let startX: number;
		let startY: number;
		let isDrawing = false; // Adiciona um estado para controlar se está desenhando

		canvas.on('mouse:down', options => {
			if (canvas.getActiveObject() || canvas.getActiveObjects().length > 0) {
				// Se houver um objeto ativo, não inicie um novo desenho
				return;
			}
			const pointer = canvas.getPointer(options.e);
			startX = pointer.x;
			startY = pointer.y;
			rect = new fabric.Rect({
				left: startX,
				top: startY,
				width: 0,
				height: 0,
				fill: 'transparent',
				stroke: 'red',
				strokeWidth: 2,
				selectable: true,
			});
			canvas.add(rect);
			isDrawing = true; // Ativa o estado de desenho
		});

		canvas.on('mouse:move', options => {
			if (!rect || !isDrawing) return;
			const pointer = canvas.getPointer(options.e);
			const { x } = pointer;
			const { y } = pointer;
			rect.set({
				width: Math.abs(x - startX),
				height: Math.abs(y - startY),
			});
			canvas.renderAll();
		});

		canvas.on('mouse:up', () => {
			if (rect) {
				rect = null;
				isDrawing = false; // Desativa o estado de desenho
			}
		});

		// Desativa o estado de desenho quando um objeto é selecionado ou movido
		canvas.on('selection:created', () => {
			isDrawing = false;
		});

		canvas.on('object:moving', e => {
			isDrawing = false;
			const obj = e.target;
			if (!obj) return;
			obj.setCoords(); // Atualiza as coordenadas do objeto
			const br = obj.getBoundingRect(); // Obtém o retângulo delimitador do objeto

			// Verifica se o objeto está dentro dos limites do canvas
			if (br.left < 0) {
				obj.left = 0;
			}
			if (br.top < 0) {
				obj.top = 0;
			}
			if (br.left + br.width > canvas.width!) {
				// Usa a asserção de tipo !
				obj.left = canvas.width! - br.width;
			}
			if (br.top + br.height > canvas.height!) {
				// Usa a asserção de tipo !
				obj.top = canvas.height! - br.height;
			}
		});

		canvas.on('object:scaling', e => {
			const scalingProperties = {
				left: 0,
				top: 0,
				scaleX: 0,
				scaleY: 0,
			};

			const shape = e.target;
			if (!shape) return;
			const maxWidth = shape.canvas.width;
			const maxHeight = shape.canvas.height;

			// left border
			if (shape.left < 0) {
				shape.left = scalingProperties.left;
				shape.scaleX = scalingProperties.scaleX;
			} else {
				scalingProperties.left = shape.left;
				scalingProperties.scaleX = shape.scaleX;
			}

			// right border
			if (scalingProperties.scaleX * shape.width + shape.left >= maxWidth) {
				shape.scaleX = (maxWidth - scalingProperties.left) / shape.width;
			} else {
				scalingProperties.scaleX = shape.scaleX;
			}

			// top border
			if (shape.top < 0) {
				shape.top = scalingProperties.top;
				shape.scaleY = scalingProperties.scaleY;
			} else {
				scalingProperties.top = shape.top;
				scalingProperties.scaleY = shape.scaleY;
			}

			// bottom border
			if (scalingProperties.scaleY * shape.height + shape.top >= maxHeight) {
				shape.scaleY = (maxHeight - scalingProperties.top) / shape.height;
			} else {
				scalingProperties.scaleY = shape.scaleY;
			}
		});
	}, [imageUrl]);

	const load = () => {
		// Implemente a lógica de carregamento aqui
	};

	const save = () => {
		if (!canvasRef.current) return;
		const canvas = new fabric.Canvas(canvasRef.current);
		const json = canvas.toJSON();
		// Implemente a lógica de salvamento aqui
	};

	return (
		<div>
			<canvas ref={canvasRef} />
			{/* <button onClick={load}>Carregar</button>
			<button onClick={save}>Salvar</button> */}
		</div>
	);

	return (
		// <Main data-content="content-main">
		// 	<Section title={translate('ANIMATE_IN_VIEW')} variant="h1">
		// 		{translate('IMPLEMENTS_ANIMATE_IN_VIEW')}
		// 	</Section>
		// 	<Section title={translate('CODES')} variant="h2">
		// 		<div className="flex gap-2  bg-dark-400">
		// 			<QuickAccessGithub name="Animate In View" />
		// 		</div>
		// 	</Section>
		<Section title="Batata" variant="h2">
			<canvas ref={canvasRef} />
		</Section>
		// </Main>
	);
}
