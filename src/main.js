import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		title: 'Agenda des dépenses'
	}
});

export default app;