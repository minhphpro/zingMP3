import Mymusic from '~/pages/Mymusic';
import Discover from '~/pages/Discover';
import Zingchart from '~/pages/Zingchart';
import Radio from '~/pages/Radio';
import Following from '~/pages/Following';
import NewMusic from '~/pages/NewMusic';
import Hub from '~/pages/Hub';
import Top100 from '~/pages/Top100';
import Mv from '~/pages/Mv';

import Artist from '~/pages/Artist';
import WeekChart from '~/pages/WeekChart';
import DetailHub from '~/pages/DetailHub';
import DetailPlaylist from '~/pages/DetailPlaylist';
import Search from '~/pages/Search';

// Public routes
const publicRoutes = [
    {
        path: '/mymusic',
        component: Mymusic,
    },
    {
        path: '/',
        component: Discover,
    },
    {
        path: '/zing-chart',
        component: Zingchart,
    },
    {
        path: '/radio',
        component: Radio,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/newmusic',
        component: NewMusic,
    },
    {
        path: '/hub',
        component: Hub,
    },
    {
        path: '/mv',
        component: Mv,
    },
    {
        path: '/top100',
        component: Top100,
    },
    {
        path: '/top100',
        component: Top100,
    },
    {
        path: '/mymusic/song/favorite',
        component: Mymusic,
    },
    {
        path: '/mymusic/library/playlist',
        component: Mymusic,
    },
    {
        path: '/mymusic/album',
        component: Mymusic,
    },
    {
        path: '/mymusic/song/upload',
        component: Mymusic,
    },
    {
        path: '/mymusic/history',
        component: Mymusic,
    },
    {
        path: '/mymusic/podcast',
        component: Mymusic,
    },
    {
        path: '/mymusic/mv',
        component: Mymusic,
    },
    //
    {
        path: '/:weekchart/:area/:id',
        component: WeekChart,
    },
    {
        path: '/nghe-si/:name',
        component: Artist,
    },
    {
        path: '/:artist',
        component: Artist,
    },
    {
        path: '/hub/:name/:id',
        component: DetailHub,
    },
    {
        path: '/search/:keyword',
        component: Search,
    },
    {
        path: '/playlist/:name/:id',
        component: DetailPlaylist,
    },
    {
        path: '/album/:name/:id',
        component: DetailPlaylist,
    },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
