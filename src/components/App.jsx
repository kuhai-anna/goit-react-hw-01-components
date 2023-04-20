import { Container } from 'components/App.styled';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <Container>
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
      <FriendList items={friends} />
      {/* історія транзакцій */}
      <TransactionHistory items={transactions} />
    </Container>
  );
};
