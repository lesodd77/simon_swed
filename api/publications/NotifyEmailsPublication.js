// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { NotifyEmailsCollection } from '../collections/NotifyEmailsCollection';

Meteor.publish('allNotifyEmails', function publishAllNotifyEmails () {
  const { userId } = this;
  if (!userId) {
    throw new Meteor.Error('Access denied');
  }
  return NotifyEmailsCollection.find(
    { userId, archived: { $ne: true } },
    {
      fields: {
        createdAt: false,
      },
    },
  );
});
