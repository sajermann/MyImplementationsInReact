export const ex1 = `styles.module.css
.news {
	width: 150px;
	height: 150px;
	background-image: url(/NPM-SajermannUiReact/src/assets/palmeiras.png);
	border-radius: 50%;
	background-size: cover;
}

.news > div {
	color: white;
	background: red;
	opacity: 0.5;
}

.news:hover > div {
	border: 2px solid white;
	opacity: 1;
}

.history {
	width: 150px;
	height: 150px;
	background-image: url(/NPM-SajermannUiReact/src/assets/history.jpg);
	background-size: cover;
	opacity: 0.5;
}
.history:hover {
	opacity: 1;
}

.history > div {
	color: white;
}

.history:hover > div {
	border: 2px solid white;
}

.cities {
	width: 150px;
	height: 150px;
	background-image: url(/NPM-SajermannUiReact/src/assets/cities.png);
	background-size: cover;
}

.cities > div {
	opacity: 0.5;
}

.cities:hover > div {
	border: 2px solid;
	opacity: 1;
}

Components

<OptionButton className={styles.history}>História</OptionButton>
<OptionButton className={styles.news}>Futebol</OptionButton>
<OptionButton className={styles.cities}>Cidades</OptionButton>
`;

export const ex2 = `styles.module.css
.dark {
	color: rgb(255, 255, 255);
}

.light {
	color: rgb(0, 0, 0);
}

.menuLeft {
	width: 100%;
	display: flex;
}

.menuRight {
	width: 100%;
	display: flex;
	justify-content: flex-end;
}

.menuCenter {
	width: 100%;
	display: flex;
	justify-content: center;
}

Components

const { darkMode } = useDarkMode();

<OptionButton className={\`\${styles.menuLeft} \${darkMode ? styles.dark : styles.light}\`}>
	Esquerda
</OptionButton>
<OptionButton className={\`\${styles.menuCenter} \${darkMode ? styles.dark : styles.light}\`}>
	Centro
</OptionButton>
<OptionButton className={\`\${styles.menuRight} \${darkMode ? styles.dark : styles.light}\`}>
	Direita
</OptionButton>
`;
