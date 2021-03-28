var $ = require("jquery");

$(function () {
    // filter insurance cards in step2
    $(document).on('change', '[name="insurance-type-filter"]', function () {
        var selectedType = $(this).val();
        if (selectedType == 2) {
            $('.offers-list .offer-card[data-insurance-type="type-2"]').slideDown();
            $('.offers-list .offer-card[data-insurance-type="type-1"]').slideUp();
        } else {
            $('.offers-list .offer-card[data-insurance-type="type-2"]').slideUp();
            $('.offers-list .offer-card[data-insurance-type="type-1"]').slideDown();
        }
    });

    // Sort offers by price in step2
    $(document).on('change', '.offers-sort-price', function () {
        var order = $(this).val();
        $('.offers-list .offer-card').sort(function (a, b) {
            if (order == 'asc') {
                return parseInt(a.dataset.offerPrice) - parseInt(b.dataset.offerPrice);
            } else {
                return parseInt(b.dataset.offerPrice) - parseInt(a.dataset.offerPrice);
            }
        }).appendTo('.offers-list');
    });

    // Delete other license from extra-details-modal
    $(document).on('click', '#extra-driver-modal .delete-other-license', function () {
        $(this).closest('tr').remove();
    });
    // Delete Driver from Step1
    $(document).on('click', '.table-responsive .btn-delete-icon', function () {
        $(this).closest('tbody').remove();
    });

    // Add other license from extra-details-modal
    $(document).on('click', '#extra-driver-modal .add-other-license', function () {
        var country = $('#extra-driver-modal #other-license-country').val();
        var years = $('#extra-driver-modal #other-license-years').val();
        $('#extra-driver-modal .other-licenses-table tbody').append($('<tr><td>' + country + '</td><td>' + years + '</td><td class="text-center"><button class="btn btn-delete-icon delete-other-license" type="button"><span></span></button></td></tr>'));
    });
});