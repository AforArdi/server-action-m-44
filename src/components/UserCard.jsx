import { Card, Link, Button } from "@heroui/react";

const UserCard = ({ user }) => {
    const { name, email, username } = user;
    return (
        <Card variant="primary" className="border p-4 rounded-lg">
            <Card.Header>
                <Card.Title>Become an Acme Creator!</Card.Title>
                <Card.Description>
                    Visit the Acme Creator Hub to sign up today and start earning credits from your fans and
                    followers.
                </Card.Description>
            </Card.Header>
            <Card.Footer>
                <Link
                    aria-label="Go to Acme Creator Hub (opens in new tab)"
                    href="https://heroui.com"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Button color="primary" variant="solid">Show Details</Button>
                </Link>
            </Card.Footer>
        </Card>
    );
}

export default UserCard;