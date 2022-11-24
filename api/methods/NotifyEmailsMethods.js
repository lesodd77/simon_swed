// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { NotifyEmailsCollection } from '../collections/NotifyEmailsCollection';

Meteor.methods({
  'notifyEmails.insert' ({ notifyEmail }) {
    check(notifyEmail, String);

    if (!notifyEmail) {
      throw new Meteor.Error('Email is required.');
    }

    return NotifyEmailsCollection.insert({
      notifyEmail,

      createdAt: new Date(),
    });
  },
  'notifyEmails.archive' ({ notifyEmailId }) {
    check(notifyEmailId, String);

    NotifyEmailsCollection.update(
      { _id: notifyEmailId },
      { $set: { archived: true } },
    );
  },
  'notifyEmails.remove' ({ notifyEmailId }) {
    check(notifyEmailId, String);

    NotifyEmailsCollection.remove(notifyEmailId);
  },
  'notifyEmails.update' ({ notifyEmailId }) {
    check(notifyEmailId, String);

    NotifyEmailsCollection.update(notifyEmailId);
  },
});
