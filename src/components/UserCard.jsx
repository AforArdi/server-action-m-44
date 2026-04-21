import {CircleDollar} from "@gravity-ui/icons";
import {Card, Link} from "@heroui/react";

const UserCard = ({ user }) => {
    const {name, email, username} = user;
    return (
        <Card className="w-100">
            <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" />
            <Card.Header>
                <Card.Title>{name}</Card.Title>
                <Card.Description>
                    <p>{username}</p>
                    <p>{email}</p>
                </Card.Description>
            </Card.Header>
            <Card.Footer>
                <Link
                    aria-label="Go to Acme Creator Hub (opens in new tab)"
                    href="https://heroui.com"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    User Details
                    <Link.Icon aria-hidden="true" />
                </Link>
            </Card.Footer>
        </Card>
    );
}

export default UserCard;