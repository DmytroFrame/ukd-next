import './ProfileButton.scss';

export default function ProfileButton({ name }: { name: string }) {
  return <div className="profile-button">{name}</div>;
}
