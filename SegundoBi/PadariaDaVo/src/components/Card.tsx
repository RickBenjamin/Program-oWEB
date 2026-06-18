interface ICardProps {
    image: string;
    alt: string;
    title: string;
    description: string;
}

export default function Card({ image, alt, title, description }: ICardProps) {
    return (
        <div className="card">
            <span>
                <img src={image} alt={alt} />
            </span>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <hr />
            </div>
        </div>
    )
}