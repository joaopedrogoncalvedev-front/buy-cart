export function Cart(){
    return (
        <div className="w-full max-w-7xl px-4 mx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Meu Carrinho</h1>
           <section className="flex items-center justify-between border-b-2 border-gray-300">
            <img src="data:image/jpeg;base64,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" 
                 alt="Logo produto" 
                 className="w-28"/>
            <strong>
                Preço: R$ 1000
            </strong>
            <div className="flex items-center justify-center gap-3">
                <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
                    -
                </button>
                2
                <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
                    +
                </button>
            </div>
            <strong className="float-right" >
                SubTotal: R$ 1000
            </strong>
           </section>
           <p className="font-bold mt-4">Total: R$ 1000</p>
        </div>
    )
}