import { InMemoryDbService } from 'angular-in-memory-web-api';
import { iUser } from './iuser';

export class UserData implements InMemoryDbService {
    createDb(){
        const users: iUser[] = [
            {
                'id': 1,
                'name': 'Oleksandr',
                'secondName': 'Vyshnevskiy',
                'email': 'mrrgoodcat@gmail.com',
                'phone': 380680067779,
                'birthday': 18071989,
                'avatar': 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg',
                'hobbies': ['electronics', 'programming', 'design']
            },
            {
                'id': 2,
                'name': 'Yana',
                'secondName': 'Vikander',
                'email': 'YanaCat@gmail.com',
                'phone': 380680067459,
                'birthday': 12061995,
                'avatar': 'https://images1.cosmopolitan.ru/upload/img_cache/e99/e994fe495251c6ebd867bb51e346f592_fitted_358x700.jpg',
                'hobbies': ['spase', 'cats', 'design']
            },
            {
                'id': 3,
                'name': 'Fradie',
                'secondName': 'Mercury',
                'email': 'Fradie@gmail.com',
                'phone': 380680099779,
                'birthday': 24111975,
                'avatar': 'https://amp.businessinsider.com/images/5b969993b354cdb8228b4f09-750-423.jpg',
                'hobbies': ['music', 'clothes']
            }
        ];
        return { users }
    }

}