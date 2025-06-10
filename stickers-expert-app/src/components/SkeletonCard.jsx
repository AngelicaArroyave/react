export const SkeletonCard = () => {
    return (
        <>
            <div className="flex w-52 flex-col gap-4 mb-8">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        </>
    )
}
