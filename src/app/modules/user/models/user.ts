import { RestEntity } from '../../rest/models/rest-entity';

/**
 * User model.
 *
 * @author Alexandre Vignon <alexandre.vignon@ynov.com>
 */
export class User extends RestEntity {
    /**
     * Username.
     *
     * @type {string}
     */
    username: string;
    /**
     * Password.
     *
     * @type {string}
     */
    password: string;

    /**
     * Email.
     *
     * @type {string}
     */
    email: string;

    /**
     * Display Name.
     *
     * @type {string}
     */
    displayName: string;
}
