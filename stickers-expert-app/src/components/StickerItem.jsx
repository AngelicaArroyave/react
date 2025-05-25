export const StickerItem = ({ title, url }) => {
    return (
        <>
            <div class="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={ url }
                        alt={ title }
                        className="rounded-xl w-[50%]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{ title }</h2>
                </div>
            </div>
        </>
    )
}
