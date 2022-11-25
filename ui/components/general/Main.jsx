/* eslint-disable import/no-unresolved */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RoutePaths } from './RoutePaths';
import { Post } from '../../post/Post';
import { PostForm } from '../../post/PostForm';
import { News } from '../../post/News';
import { Access } from '../../auth/Access';
import { AnonymousOnly } from '../../auth/AnonymousOnly';
import { RemovePost } from '../../auth/RemovePost';
import { Admin } from '../../pages/admin/Admin';
import { AdminOnly } from '../../pages/admin/AdminOnly';
import { ForgotPassword } from '../../auth/ForgotPassword';
import { ResetPassword } from '../../auth/ResetPassword';
import { LoggedUserOnly } from '../../auth/LoggedUserOnly';
import { Profile } from '../../auth/Profile';
import { Home } from '../../pages/index';
import { NotFound } from '../../pages/notFound/NotFound';

export const Main = () => (
  <>
    <Routes>
      <Route
        path={RoutePaths.HOME}
        element={<Home />}
      />
      <Route
        element={
          <LoggedUserOnly>
            <Profile />
          </LoggedUserOnly>
        }
        path={RoutePaths.PROFILE}
      />
      <Route
        element={
          <LoggedUserOnly>
            <RemovePost />
          </LoggedUserOnly>
        }
        path={RoutePaths.REMOVE_POST}
      />
      <Route element={<Admin />} path={RoutePaths.ADMIN} />
      <Route element={<ForgotPassword />} path={RoutePaths.FORGOT_PASSWORD} />
      <Route
        element={<ResetPassword />}
        path={`${RoutePaths.RESET_PASSWORD}/:token`}
      />
      <Route
        element={
          <AnonymousOnly>
            <Access />
          </AnonymousOnly>
        }
        path={RoutePaths.ACCESS}
      />
      <Route
        element={
          <LoggedUserOnly>
            <PostForm />
        </LoggedUserOnly>
        }
        path={RoutePaths.POSTFORM}
      />
      <Route
        element={
          <LoggedUserOnly>
            <News />
        </LoggedUserOnly>
        }
        path={RoutePaths.NEWS}
      />
      <Route
        element={
          <AdminOnly>
            <Post />
          </AdminOnly>
        }
        path={RoutePaths.POST}
      />
      <Route path="*" element={<NotFound />} />
      </Routes>
  </>
);
