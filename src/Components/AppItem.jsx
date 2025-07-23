export default function AppItem({ title, imageUrl }) {
    return (
        <section className="flex flex-col gap-1 hover:-pt-1 items-center">
            <div className="flex h-16 w-16 rounded-lg shadow-md bg-white p-4 items-center mt-0.5 mb-0.5 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:mt-0 hover:mb-1">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-8 h-auto items-center"
                />
            </div>
            <p>{title}</p>
        </section>
    );
}