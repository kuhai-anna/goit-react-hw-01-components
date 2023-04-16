import css from './App.module.css';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FrindList } from './friendList/FriendList';
import { TransactionHistory } from './transactions/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div className={css.container}>
      {/* профіль користувача */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* статистика завантажень */}
      <Statistics title="Upload stats" stats={data} />
      {/* список друзів */}
      <FrindList items={friends} />
      {/* історія транзакцій */}
      <TransactionHistory items={transactions} />
    </div>
  );
};
