import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { IUser } from '../models/user'
import '../styles/pages/Profile.css'

interface IProfileProps extends RouteComponentProps {
  user: IUser,
}

const Profile: React.FC<IProfileProps> = ({ user }) => (
  <section className="wrapper profile-card">
    <div className="profile-card__wrapper profile-card__wrapper--avatar">
      <img className="profile-card__avatar" src="http://i.pravatar.cc/300" alt="user image" title="user image"/>
    </div>
    <div className="profile-card__wrapper">
      <h2 className="profile-card__username">{user.username}</h2>
      <p className="profile-card__userinfo">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto atque in labore tempora totam veniam? Accusantium asperiores aut autem, consequuntur culpa, eveniet ex natus quisquam repellendus sed velit voluptatem! Aperiam dolorem est eum harum illo ipsum itaque molestiae! Inventore.
      </p>
    </div>
  </section>
)

export default Profile
