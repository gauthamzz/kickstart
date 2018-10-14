import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x92445A57fD48fE1553ae6239bcf48B7731d0F290'    
);

export default instance;