import Vue from 'vue'
import Router from 'vue-router'

// Index
import Index from '@/components/biomes/Index'

//Aqatic
import AquaticIndex from '@/components/biomes/Index/IndexAquatic'
import AquaticCreate from '@/components/biomes/Create/CreateAquatic'
import AquaticEdit from '@/components/biomes/Edit/EditAquatic'
import AquaticShow from '@/components/biomes/Show/ShowAquatic'

//Tropical
import TropicalIndex from '@/components/biomes/Index/IndexTropical'
import TropicalCreate from '@/components/biomes/Create/CreateTropical'
import TropicalEdit from '@/components/biomes/Edit/EditTropical'
import TropicalShow from '@/components/biomes/Show/ShowTropical'

//Savanna
import SavannaIndex from '@/components/biomes/Index/IndexSavanna'
import SavannaCreate from '@/components/biomes/Create/CreateSavanna'
import SavannaEdit from '@/components/biomes/Edit/EditSavanna'
import SavannaShow from '@/components/biomes/Show/ShowSavanna'

//Trundra
import TrundraIndex from '@/components/biomes/Index/IndexTrundra'
import TrundraCreate from '@/components/biomes/Create/CreateTrundra'
import TrundraEdit from '@/components/biomes/Edit/EditTrundra'
import TrundraShow from '@/components/biomes/Show/ShowTrundra'

//Grassland
import GrasslandIndex from '@/components/biomes/Index/IndexGrassland'
import GrasslandCreate from '@/components/biomes/Create/CreateGrassland'
import GrasslandEdit from '@/components/biomes/Edit/EditGrassland'
import GrasslandShow from '@/components/biomes/Show/ShowGrassland'


Vue.use(Router)

export default new Router({
  routes: [
    // Index
    {
      path: '/index',
      name: 'index',
      component: Index
    },

    //Aquatic//
    {
      path: '/aquatics',
      name: 'aquatics',
      component: AquaticIndex
    },
    {
      path: '/aquatic/create',
      name: 'aquatic-create',
      component: AquaticCreate
    },
    {
      path: '/aquatic/edit/:aquaticId',
      name: 'aquatic-edit',
      component: AquaticEdit
    },
    {
      path: '/aquatic/:aquaticId',
      name: 'aquatic',
      component: AquaticShow
    },

    //Tropical
    {
      path: '/tropicals',
      name: 'tropicals',
      component: TropicalIndex
    },
    {
      path: '/tropical/create',
      name: 'tropical-create',
      component: TropicalCreate
    },
    {
      path: '/tropical/edit/:tropicalId',
      name: 'tropical-edit',
      component: TropicalEdit
    },
    {
      path: '/tropical/:tropicalId',
      name: 'tropical',
      component: TropicalShow
    },

    //Savanna
    {
      path: '/savannas',
      name: 'savannas',
      component: SavannaIndex
    },
    {
      path: '/savanna/create',
      name: 'savanna-create',
      component: SavannaCreate
    },
    {
      path: '/savanna/edit/:savannaId',
      name: 'savanna-edit',
      component: SavannaEdit
    },
    {
      path: '/savanna/:savannaId',
      name: 'savanna',
      component: SavannaShow
    },

    //Trundra
    {
      path: '/trundras',
      name: 'trundras',
      component: TrundraIndex
    },
    {
      path: '/trundra/create',
      name: 'trundra-create',
      component: TrundraCreate
    },
    {
      path: '/trundra/edit/:trundraId',
      name: 'trundra-edit',
      component: TrundraEdit
    },
    {
      path: '/trundra/:trundraId',
      name: 'trundra',
      component: TrundraShow
    },

    //Grassland
    {
      path: '/grasslands',
      name: 'grasslands',
      component: GrasslandIndex
    },
    {
      path: '/grassland/create',
      name: 'grassland-create',
      component: GrasslandCreate
    },
    {
      path: '/grassland/edit/:grasslandId',
      name: 'grassland-edit',
      component: GrasslandEdit
    },
    {
      path: '/grassland/:grasslandId',
      name: 'grassland',
      component: GrasslandShow
    },
   
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login
    //  },
  ]
})
