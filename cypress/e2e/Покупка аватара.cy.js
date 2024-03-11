describe('Тестирование покупка аватара', function () {
    it('Покупка аватара', function () {
         cy.visit('https://pokemonbattle.me/login');
         cy.get(':nth-child(1) > .auth__input').type('vebej52192@seosnaps.com');
         cy.get('#password').type('Saktor1289');
         cy.get('.auth__button').click();
         cy.get('.header__btns > [href="/shop"]').click();
         cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
         cy.get('.pay__cardtypeimage').should('be.visible');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('DANIL STRYGIN');
         cy.get('.pay-btn').click();
         cy.get('.payment__submit-button').should('be.disabled');
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').should('be.enabled');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__font-for-success').should('be.visible');
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
     })
    })