import "./style.css"

export default function ButtonsSectionProjetos() {
    return (
        <section className="relative py-5 pt-20">
            <div className="mx-auto w-8/12">
                <div className="button-container-projetos">
                    <button className="btn btn-shadow-2">
                        <a href="#">Comercial</a>
                    </button>
                    <button className="btn btn-shadow-2">
                        <a href="#">Residencial</a>
                    </button>
                </div>
            </div>
        </section>
    );
}