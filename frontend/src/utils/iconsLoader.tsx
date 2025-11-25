import type { TSVGIconComponent } from "@stypes/components";

const modules = import.meta.glob('../assets/icons/*.tsx', {
	eager: true,
	import: 'default',
});

const icons: Record<string, TSVGIconComponent> = Object.fromEntries(
	Object.entries(modules).map(([path, component]) => {
		const name = path
		    .split('/')
		    .pop()!
		    .replace('.tsx', '');
		return [name, component as TSVGIconComponent];
	})
);

export default icons
