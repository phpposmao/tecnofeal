type Props = {
    name: string;
    title: string;
}

export function SectionHeader({ name, title }: Props) {
    return (
        <header className="relative text-center mb-20 mt-5 text-4xl font-bold text-gray-800">
            <h2 className="text-center m-0 ml-5 uppercase tracking-widest leading-3">{title}</h2>
            <strong className="absolute z-10 -bottom-5 -right-0 text-8xl opacity-5 text-white">{name}</strong>
        </header>
    );
}