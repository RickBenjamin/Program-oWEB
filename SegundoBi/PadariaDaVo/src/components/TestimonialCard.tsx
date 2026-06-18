interface ITestimonialCardProps {
    testimony: string;
    rating: number;
    name: string;
    role: string;
}

export default function TestimonialCard({ testimony, rating, name, role }: ITestimonialCardProps) {
    return (
        <div className="carousel-card">
            <span className="testimony">
                <p>{testimony}</p>
            </span>
            <span className="rating">
                {"⭐".repeat(rating)}
            </span>
            <span className="names">
                <p>{name}</p>
                <p>{role}</p>
            </span>
        </div>
    )
}